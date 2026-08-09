# `iotsitewiseDashboard` Submodule <a name="`iotsitewiseDashboard` Submodule" id="@cdktn/provider-awscc.iotsitewiseDashboard"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewiseDashboard <a name="IotsitewiseDashboard" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard awscc_iotsitewise_dashboard}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dashboard.IotsitewiseDashboard;

IotsitewiseDashboard.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dashboardDefinition(java.lang.String)
    .dashboardDescription(java.lang.String)
    .dashboardName(java.lang.String)
//  .projectId(java.lang.String)
//  .tags(IResolvable|java.util.List<IotsitewiseDashboardTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.dashboardDefinition">dashboardDefinition</a></code> | <code>java.lang.String</code> | The dashboard definition specified in a JSON literal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.dashboardDescription">dashboardDescription</a></code> | <code>java.lang.String</code> | A description for the dashboard. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.dashboardName">dashboardName</a></code> | <code>java.lang.String</code> | A friendly name for the dashboard. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project in which to create the dashboard. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>></code> | A list of key-value pairs that contain metadata for the dashboard. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dashboardDefinition`<sup>Required</sup> <a name="dashboardDefinition" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.dashboardDefinition"></a>

- *Type:* java.lang.String

The dashboard definition specified in a JSON literal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#dashboard_definition IotsitewiseDashboard#dashboard_definition}

---

##### `dashboardDescription`<sup>Required</sup> <a name="dashboardDescription" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.dashboardDescription"></a>

- *Type:* java.lang.String

A description for the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#dashboard_description IotsitewiseDashboard#dashboard_description}

---

##### `dashboardName`<sup>Required</sup> <a name="dashboardName" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.dashboardName"></a>

- *Type:* java.lang.String

A friendly name for the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#dashboard_name IotsitewiseDashboard#dashboard_name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.projectId"></a>

- *Type:* java.lang.String

The ID of the project in which to create the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#project_id IotsitewiseDashboard#project_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>>

A list of key-value pairs that contain metadata for the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#tags IotsitewiseDashboard#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<IotsitewiseDashboardTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>>

---

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.resetProjectId"></a>

```java
public void resetProjectId()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotsitewiseDashboard resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.isConstruct"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dashboard.IotsitewiseDashboard;

IotsitewiseDashboard.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dashboard.IotsitewiseDashboard;

IotsitewiseDashboard.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dashboard.IotsitewiseDashboard;

IotsitewiseDashboard.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dashboard.IotsitewiseDashboard;

IotsitewiseDashboard.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotsitewiseDashboard.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a IotsitewiseDashboard resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotsitewiseDashboard to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotsitewiseDashboard that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewiseDashboard to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardArn">dashboardArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardId">dashboardId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList">IotsitewiseDashboardTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardDefinitionInput">dashboardDefinitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardDescriptionInput">dashboardDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardNameInput">dashboardNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.projectIdInput">projectIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardDefinition">dashboardDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardDescription">dashboardDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardName">dashboardName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dashboardArn`<sup>Required</sup> <a name="dashboardArn" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardArn"></a>

```java
public java.lang.String getDashboardArn();
```

- *Type:* java.lang.String

---

##### `dashboardId`<sup>Required</sup> <a name="dashboardId" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardId"></a>

```java
public java.lang.String getDashboardId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.tags"></a>

```java
public IotsitewiseDashboardTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList">IotsitewiseDashboardTagsList</a>

---

##### `dashboardDefinitionInput`<sup>Optional</sup> <a name="dashboardDefinitionInput" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardDefinitionInput"></a>

```java
public java.lang.String getDashboardDefinitionInput();
```

- *Type:* java.lang.String

---

##### `dashboardDescriptionInput`<sup>Optional</sup> <a name="dashboardDescriptionInput" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardDescriptionInput"></a>

```java
public java.lang.String getDashboardDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dashboardNameInput`<sup>Optional</sup> <a name="dashboardNameInput" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardNameInput"></a>

```java
public java.lang.String getDashboardNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.projectIdInput"></a>

```java
public java.lang.String getProjectIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.tagsInput"></a>

```java
public IResolvable|java.util.List<IotsitewiseDashboardTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>>

---

##### `dashboardDefinition`<sup>Required</sup> <a name="dashboardDefinition" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardDefinition"></a>

```java
public java.lang.String getDashboardDefinition();
```

- *Type:* java.lang.String

---

##### `dashboardDescription`<sup>Required</sup> <a name="dashboardDescription" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardDescription"></a>

```java
public java.lang.String getDashboardDescription();
```

- *Type:* java.lang.String

---

##### `dashboardName`<sup>Required</sup> <a name="dashboardName" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.dashboardName"></a>

```java
public java.lang.String getDashboardName();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboard.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewiseDashboardConfig <a name="IotsitewiseDashboardConfig" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dashboard.IotsitewiseDashboardConfig;

IotsitewiseDashboardConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dashboardDefinition(java.lang.String)
    .dashboardDescription(java.lang.String)
    .dashboardName(java.lang.String)
//  .projectId(java.lang.String)
//  .tags(IResolvable|java.util.List<IotsitewiseDashboardTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.dashboardDefinition">dashboardDefinition</a></code> | <code>java.lang.String</code> | The dashboard definition specified in a JSON literal. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.dashboardDescription">dashboardDescription</a></code> | <code>java.lang.String</code> | A description for the dashboard. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.dashboardName">dashboardName</a></code> | <code>java.lang.String</code> | A friendly name for the dashboard. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.projectId">projectId</a></code> | <code>java.lang.String</code> | The ID of the project in which to create the dashboard. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>></code> | A list of key-value pairs that contain metadata for the dashboard. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dashboardDefinition`<sup>Required</sup> <a name="dashboardDefinition" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.dashboardDefinition"></a>

```java
public java.lang.String getDashboardDefinition();
```

- *Type:* java.lang.String

The dashboard definition specified in a JSON literal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#dashboard_definition IotsitewiseDashboard#dashboard_definition}

---

##### `dashboardDescription`<sup>Required</sup> <a name="dashboardDescription" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.dashboardDescription"></a>

```java
public java.lang.String getDashboardDescription();
```

- *Type:* java.lang.String

A description for the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#dashboard_description IotsitewiseDashboard#dashboard_description}

---

##### `dashboardName`<sup>Required</sup> <a name="dashboardName" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.dashboardName"></a>

```java
public java.lang.String getDashboardName();
```

- *Type:* java.lang.String

A friendly name for the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#dashboard_name IotsitewiseDashboard#dashboard_name}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

The ID of the project in which to create the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#project_id IotsitewiseDashboard#project_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardConfig.property.tags"></a>

```java
public IResolvable|java.util.List<IotsitewiseDashboardTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>>

A list of key-value pairs that contain metadata for the dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#tags IotsitewiseDashboard#tags}

---

### IotsitewiseDashboardTags <a name="IotsitewiseDashboardTags" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dashboard.IotsitewiseDashboardTags;

IotsitewiseDashboardTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#key IotsitewiseDashboard#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#value IotsitewiseDashboard#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#key IotsitewiseDashboard#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/iotsitewise_dashboard#value IotsitewiseDashboard#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewiseDashboardTagsList <a name="IotsitewiseDashboardTagsList" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dashboard.IotsitewiseDashboardTagsList;

new IotsitewiseDashboardTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.get"></a>

```java
public IotsitewiseDashboardTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<IotsitewiseDashboardTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>>

---


### IotsitewiseDashboardTagsOutputReference <a name="IotsitewiseDashboardTagsOutputReference" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.iotsitewise_dashboard.IotsitewiseDashboardTagsOutputReference;

new IotsitewiseDashboardTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|IotsitewiseDashboardTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseDashboard.IotsitewiseDashboardTags">IotsitewiseDashboardTags</a>

---



