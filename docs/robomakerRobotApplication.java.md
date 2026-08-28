# `robomakerRobotApplication` Submodule <a name="`robomakerRobotApplication` Submodule" id="@cdktn/provider-awscc.robomakerRobotApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RobomakerRobotApplication <a name="RobomakerRobotApplication" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application awscc_robomaker_robot_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer"></a>

```java
import io.cdktn.providers.awscc.robomaker_robot_application.RobomakerRobotApplication;

RobomakerRobotApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .robotSoftwareSuite(RobomakerRobotApplicationRobotSoftwareSuite)
//  .currentRevisionId(java.lang.String)
//  .environment(java.lang.String)
//  .name(java.lang.String)
//  .sources(IResolvable|java.util.List<RobomakerRobotApplicationSources>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.robotSoftwareSuite">robotSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a></code> | The robot software suite used by the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.currentRevisionId">currentRevisionId</a></code> | <code>java.lang.String</code> | The revision ID of robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | The URI of the Docker image for the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.sources">sources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>></code> | The sources of the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A key-value pair to associate with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="robotSoftwareSuite" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.robotSoftwareSuite"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a>

The robot software suite used by the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#robot_software_suite RobomakerRobotApplication#robot_software_suite}

---

##### `currentRevisionId`<sup>Optional</sup> <a name="currentRevisionId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.currentRevisionId"></a>

- *Type:* java.lang.String

The revision ID of robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#current_revision_id RobomakerRobotApplication#current_revision_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

The URI of the Docker image for the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#environment RobomakerRobotApplication#environment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#name RobomakerRobotApplication#name}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.sources"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>>

The sources of the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#sources RobomakerRobotApplication#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#tags RobomakerRobotApplication#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putRobotSoftwareSuite">putRobotSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetCurrentRevisionId">resetCurrentRevisionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetSources">resetSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRobotSoftwareSuite` <a name="putRobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putRobotSoftwareSuite"></a>

```java
public void putRobotSoftwareSuite(RobomakerRobotApplicationRobotSoftwareSuite value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putRobotSoftwareSuite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a>

---

##### `putSources` <a name="putSources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putSources"></a>

```java
public void putSources(IResolvable|java.util.List<RobomakerRobotApplicationSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.putSources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>>

---

##### `resetCurrentRevisionId` <a name="resetCurrentRevisionId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetCurrentRevisionId"></a>

```java
public void resetCurrentRevisionId()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetName"></a>

```java
public void resetName()
```

##### `resetSources` <a name="resetSources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetSources"></a>

```java
public void resetSources()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RobomakerRobotApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isConstruct"></a>

```java
import io.cdktn.providers.awscc.robomaker_robot_application.RobomakerRobotApplication;

RobomakerRobotApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.robomaker_robot_application.RobomakerRobotApplication;

RobomakerRobotApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.robomaker_robot_application.RobomakerRobotApplication;

RobomakerRobotApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.robomaker_robot_application.RobomakerRobotApplication;

RobomakerRobotApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RobomakerRobotApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RobomakerRobotApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RobomakerRobotApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RobomakerRobotApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RobomakerRobotApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.robotSoftwareSuite">robotSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference">RobomakerRobotApplicationRobotSoftwareSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList">RobomakerRobotApplicationSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.currentRevisionIdInput">currentRevisionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.robotSoftwareSuiteInput">robotSoftwareSuiteInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.sourcesInput">sourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.currentRevisionId">currentRevisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="robotSoftwareSuite" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.robotSoftwareSuite"></a>

```java
public RobomakerRobotApplicationRobotSoftwareSuiteOutputReference getRobotSoftwareSuite();
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference">RobomakerRobotApplicationRobotSoftwareSuiteOutputReference</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.sources"></a>

```java
public RobomakerRobotApplicationSourcesList getSources();
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList">RobomakerRobotApplicationSourcesList</a>

---

##### `currentRevisionIdInput`<sup>Optional</sup> <a name="currentRevisionIdInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.currentRevisionIdInput"></a>

```java
public java.lang.String getCurrentRevisionIdInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `robotSoftwareSuiteInput`<sup>Optional</sup> <a name="robotSoftwareSuiteInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.robotSoftwareSuiteInput"></a>

```java
public IResolvable|RobomakerRobotApplicationRobotSoftwareSuite getRobotSoftwareSuiteInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a>

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.sourcesInput"></a>

```java
public IResolvable|java.util.List<RobomakerRobotApplicationSources> getSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `currentRevisionId`<sup>Required</sup> <a name="currentRevisionId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.currentRevisionId"></a>

```java
public java.lang.String getCurrentRevisionId();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RobomakerRobotApplicationConfig <a name="RobomakerRobotApplicationConfig" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.robomaker_robot_application.RobomakerRobotApplicationConfig;

RobomakerRobotApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .robotSoftwareSuite(RobomakerRobotApplicationRobotSoftwareSuite)
//  .currentRevisionId(java.lang.String)
//  .environment(java.lang.String)
//  .name(java.lang.String)
//  .sources(IResolvable|java.util.List<RobomakerRobotApplicationSources>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.robotSoftwareSuite">robotSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a></code> | The robot software suite used by the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.currentRevisionId">currentRevisionId</a></code> | <code>java.lang.String</code> | The revision ID of robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | The URI of the Docker image for the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.sources">sources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>></code> | The sources of the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="robotSoftwareSuite" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.robotSoftwareSuite"></a>

```java
public RobomakerRobotApplicationRobotSoftwareSuite getRobotSoftwareSuite();
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a>

The robot software suite used by the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#robot_software_suite RobomakerRobotApplication#robot_software_suite}

---

##### `currentRevisionId`<sup>Optional</sup> <a name="currentRevisionId" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.currentRevisionId"></a>

```java
public java.lang.String getCurrentRevisionId();
```

- *Type:* java.lang.String

The revision ID of robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#current_revision_id RobomakerRobotApplication#current_revision_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The URI of the Docker image for the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#environment RobomakerRobotApplication#environment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#name RobomakerRobotApplication#name}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.sources"></a>

```java
public IResolvable|java.util.List<RobomakerRobotApplicationSources> getSources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>>

The sources of the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#sources RobomakerRobotApplication#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#tags RobomakerRobotApplication#tags}

---

### RobomakerRobotApplicationRobotSoftwareSuite <a name="RobomakerRobotApplicationRobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.Initializer"></a>

```java
import io.cdktn.providers.awscc.robomaker_robot_application.RobomakerRobotApplicationRobotSoftwareSuite;

RobomakerRobotApplicationRobotSoftwareSuite.builder()
    .name(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.property.name">name</a></code> | <code>java.lang.String</code> | The name of robot software suite. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.property.version">version</a></code> | <code>java.lang.String</code> | The version of robot software suite. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#name RobomakerRobotApplication#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The version of robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#version RobomakerRobotApplication#version}

---

### RobomakerRobotApplicationSources <a name="RobomakerRobotApplicationSources" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.Initializer"></a>

```java
import io.cdktn.providers.awscc.robomaker_robot_application.RobomakerRobotApplicationSources;

RobomakerRobotApplicationSources.builder()
//  .architecture(java.lang.String)
//  .s3Bucket(java.lang.String)
//  .s3Key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.architecture">architecture</a></code> | <code>java.lang.String</code> | The architecture of robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | The Arn of the S3Bucket that stores the robot application source. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | The s3 key of robot application source. |

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

The architecture of robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#architecture RobomakerRobotApplication#architecture}

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

The Arn of the S3Bucket that stores the robot application source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#s3_bucket RobomakerRobotApplication#s3_bucket}

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

The s3 key of robot application source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/robomaker_robot_application#s3_key RobomakerRobotApplication#s3_key}

---

## Classes <a name="Classes" id="Classes"></a>

### RobomakerRobotApplicationRobotSoftwareSuiteOutputReference <a name="RobomakerRobotApplicationRobotSoftwareSuiteOutputReference" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.robomaker_robot_application.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference;

new RobomakerRobotApplicationRobotSoftwareSuiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuiteOutputReference.property.internalValue"></a>

```java
public IResolvable|RobomakerRobotApplicationRobotSoftwareSuite getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationRobotSoftwareSuite">RobomakerRobotApplicationRobotSoftwareSuite</a>

---


### RobomakerRobotApplicationSourcesList <a name="RobomakerRobotApplicationSourcesList" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.robomaker_robot_application.RobomakerRobotApplicationSourcesList;

new RobomakerRobotApplicationSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.get"></a>

```java
public RobomakerRobotApplicationSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RobomakerRobotApplicationSources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>>

---


### RobomakerRobotApplicationSourcesOutputReference <a name="RobomakerRobotApplicationSourcesOutputReference" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.robomaker_robot_application.RobomakerRobotApplicationSourcesOutputReference;

new RobomakerRobotApplicationSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetArchitecture">resetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetS3Key">resetS3Key</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchitecture` <a name="resetArchitecture" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetArchitecture"></a>

```java
public void resetArchitecture()
```

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetS3Bucket"></a>

```java
public void resetS3Bucket()
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.resetS3Key"></a>

```java
public void resetS3Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.architectureInput">architectureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.architecture">architecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `architectureInput`<sup>Optional</sup> <a name="architectureInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.architectureInput"></a>

```java
public java.lang.String getArchitectureInput();
```

- *Type:* java.lang.String

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3BucketInput"></a>

```java
public java.lang.String getS3BucketInput();
```

- *Type:* java.lang.String

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3KeyInput"></a>

```java
public java.lang.String getS3KeyInput();
```

- *Type:* java.lang.String

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|RobomakerRobotApplicationSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerRobotApplication.RobomakerRobotApplicationSources">RobomakerRobotApplicationSources</a>

---



