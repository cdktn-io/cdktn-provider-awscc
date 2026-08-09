# `robomakerSimulationApplication` Submodule <a name="`robomakerSimulationApplication` Submodule" id="@cdktn/provider-awscc.robomakerSimulationApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RobomakerSimulationApplication <a name="RobomakerSimulationApplication" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application awscc_robomaker_simulation_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer"></a>

```java
import io.cdktn.providers.awscc.robomaker_simulation_application.RobomakerSimulationApplication;

RobomakerSimulationApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .robotSoftwareSuite(RobomakerSimulationApplicationRobotSoftwareSuite)
    .simulationSoftwareSuite(RobomakerSimulationApplicationSimulationSoftwareSuite)
//  .currentRevisionId(java.lang.String)
//  .environment(java.lang.String)
//  .name(java.lang.String)
//  .renderingEngine(RobomakerSimulationApplicationRenderingEngine)
//  .sources(IResolvable|java.util.List<RobomakerSimulationApplicationSources>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.robotSoftwareSuite">robotSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a></code> | The robot software suite used by the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.simulationSoftwareSuite">simulationSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a></code> | The simulation software suite used by the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.currentRevisionId">currentRevisionId</a></code> | <code>java.lang.String</code> | The current revision id. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | The URI of the Docker image for the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.renderingEngine">renderingEngine</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a></code> | The rendering engine for the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.sources">sources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>></code> | The sources of the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A key-value pair to associate with a resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="robotSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.robotSoftwareSuite"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a>

The robot software suite used by the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#robot_software_suite RobomakerSimulationApplication#robot_software_suite}

---

##### `simulationSoftwareSuite`<sup>Required</sup> <a name="simulationSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.simulationSoftwareSuite"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a>

The simulation software suite used by the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#simulation_software_suite RobomakerSimulationApplication#simulation_software_suite}

---

##### `currentRevisionId`<sup>Optional</sup> <a name="currentRevisionId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.currentRevisionId"></a>

- *Type:* java.lang.String

The current revision id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#current_revision_id RobomakerSimulationApplication#current_revision_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

The URI of the Docker image for the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#environment RobomakerSimulationApplication#environment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

##### `renderingEngine`<sup>Optional</sup> <a name="renderingEngine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.renderingEngine"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a>

The rendering engine for the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#rendering_engine RobomakerSimulationApplication#rendering_engine}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.sources"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>>

The sources of the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#sources RobomakerSimulationApplication#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#tags RobomakerSimulationApplication#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRenderingEngine">putRenderingEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRobotSoftwareSuite">putRobotSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSimulationSoftwareSuite">putSimulationSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetCurrentRevisionId">resetCurrentRevisionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetRenderingEngine">resetRenderingEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetSources">resetSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRenderingEngine` <a name="putRenderingEngine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRenderingEngine"></a>

```java
public void putRenderingEngine(RobomakerSimulationApplicationRenderingEngine value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRenderingEngine.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a>

---

##### `putRobotSoftwareSuite` <a name="putRobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRobotSoftwareSuite"></a>

```java
public void putRobotSoftwareSuite(RobomakerSimulationApplicationRobotSoftwareSuite value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putRobotSoftwareSuite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a>

---

##### `putSimulationSoftwareSuite` <a name="putSimulationSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSimulationSoftwareSuite"></a>

```java
public void putSimulationSoftwareSuite(RobomakerSimulationApplicationSimulationSoftwareSuite value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSimulationSoftwareSuite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a>

---

##### `putSources` <a name="putSources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSources"></a>

```java
public void putSources(IResolvable|java.util.List<RobomakerSimulationApplicationSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.putSources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>>

---

##### `resetCurrentRevisionId` <a name="resetCurrentRevisionId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetCurrentRevisionId"></a>

```java
public void resetCurrentRevisionId()
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetEnvironment"></a>

```java
public void resetEnvironment()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetName"></a>

```java
public void resetName()
```

##### `resetRenderingEngine` <a name="resetRenderingEngine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetRenderingEngine"></a>

```java
public void resetRenderingEngine()
```

##### `resetSources` <a name="resetSources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetSources"></a>

```java
public void resetSources()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RobomakerSimulationApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isConstruct"></a>

```java
import io.cdktn.providers.awscc.robomaker_simulation_application.RobomakerSimulationApplication;

RobomakerSimulationApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.robomaker_simulation_application.RobomakerSimulationApplication;

RobomakerSimulationApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.robomaker_simulation_application.RobomakerSimulationApplication;

RobomakerSimulationApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.robomaker_simulation_application.RobomakerSimulationApplication;

RobomakerSimulationApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),RobomakerSimulationApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a RobomakerSimulationApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the RobomakerSimulationApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing RobomakerSimulationApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the RobomakerSimulationApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.renderingEngine">renderingEngine</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference">RobomakerSimulationApplicationRenderingEngineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.robotSoftwareSuite">robotSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference">RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.simulationSoftwareSuite">simulationSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference">RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList">RobomakerSimulationApplicationSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.currentRevisionIdInput">currentRevisionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.renderingEngineInput">renderingEngineInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.robotSoftwareSuiteInput">robotSoftwareSuiteInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.simulationSoftwareSuiteInput">simulationSoftwareSuiteInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.sourcesInput">sourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.currentRevisionId">currentRevisionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `renderingEngine`<sup>Required</sup> <a name="renderingEngine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.renderingEngine"></a>

```java
public RobomakerSimulationApplicationRenderingEngineOutputReference getRenderingEngine();
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference">RobomakerSimulationApplicationRenderingEngineOutputReference</a>

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="robotSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.robotSoftwareSuite"></a>

```java
public RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference getRobotSoftwareSuite();
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference">RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference</a>

---

##### `simulationSoftwareSuite`<sup>Required</sup> <a name="simulationSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.simulationSoftwareSuite"></a>

```java
public RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference getSimulationSoftwareSuite();
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference">RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.sources"></a>

```java
public RobomakerSimulationApplicationSourcesList getSources();
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList">RobomakerSimulationApplicationSourcesList</a>

---

##### `currentRevisionIdInput`<sup>Optional</sup> <a name="currentRevisionIdInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.currentRevisionIdInput"></a>

```java
public java.lang.String getCurrentRevisionIdInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `renderingEngineInput`<sup>Optional</sup> <a name="renderingEngineInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.renderingEngineInput"></a>

```java
public IResolvable|RobomakerSimulationApplicationRenderingEngine getRenderingEngineInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a>

---

##### `robotSoftwareSuiteInput`<sup>Optional</sup> <a name="robotSoftwareSuiteInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.robotSoftwareSuiteInput"></a>

```java
public IResolvable|RobomakerSimulationApplicationRobotSoftwareSuite getRobotSoftwareSuiteInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a>

---

##### `simulationSoftwareSuiteInput`<sup>Optional</sup> <a name="simulationSoftwareSuiteInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.simulationSoftwareSuiteInput"></a>

```java
public IResolvable|RobomakerSimulationApplicationSimulationSoftwareSuite getSimulationSoftwareSuiteInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a>

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.sourcesInput"></a>

```java
public IResolvable|java.util.List<RobomakerSimulationApplicationSources> getSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `currentRevisionId`<sup>Required</sup> <a name="currentRevisionId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.currentRevisionId"></a>

```java
public java.lang.String getCurrentRevisionId();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### RobomakerSimulationApplicationConfig <a name="RobomakerSimulationApplicationConfig" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.robomaker_simulation_application.RobomakerSimulationApplicationConfig;

RobomakerSimulationApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .robotSoftwareSuite(RobomakerSimulationApplicationRobotSoftwareSuite)
    .simulationSoftwareSuite(RobomakerSimulationApplicationSimulationSoftwareSuite)
//  .currentRevisionId(java.lang.String)
//  .environment(java.lang.String)
//  .name(java.lang.String)
//  .renderingEngine(RobomakerSimulationApplicationRenderingEngine)
//  .sources(IResolvable|java.util.List<RobomakerSimulationApplicationSources>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.robotSoftwareSuite">robotSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a></code> | The robot software suite used by the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.simulationSoftwareSuite">simulationSoftwareSuite</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a></code> | The simulation software suite used by the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.currentRevisionId">currentRevisionId</a></code> | <code>java.lang.String</code> | The current revision id. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | The URI of the Docker image for the robot application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.renderingEngine">renderingEngine</a></code> | <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a></code> | The rendering engine for the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.sources">sources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>></code> | The sources of the simulation application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A key-value pair to associate with a resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `robotSoftwareSuite`<sup>Required</sup> <a name="robotSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.robotSoftwareSuite"></a>

```java
public RobomakerSimulationApplicationRobotSoftwareSuite getRobotSoftwareSuite();
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a>

The robot software suite used by the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#robot_software_suite RobomakerSimulationApplication#robot_software_suite}

---

##### `simulationSoftwareSuite`<sup>Required</sup> <a name="simulationSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.simulationSoftwareSuite"></a>

```java
public RobomakerSimulationApplicationSimulationSoftwareSuite getSimulationSoftwareSuite();
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a>

The simulation software suite used by the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#simulation_software_suite RobomakerSimulationApplication#simulation_software_suite}

---

##### `currentRevisionId`<sup>Optional</sup> <a name="currentRevisionId" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.currentRevisionId"></a>

```java
public java.lang.String getCurrentRevisionId();
```

- *Type:* java.lang.String

The current revision id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#current_revision_id RobomakerSimulationApplication#current_revision_id}

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

The URI of the Docker image for the robot application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#environment RobomakerSimulationApplication#environment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

##### `renderingEngine`<sup>Optional</sup> <a name="renderingEngine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.renderingEngine"></a>

```java
public RobomakerSimulationApplicationRenderingEngine getRenderingEngine();
```

- *Type:* <a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a>

The rendering engine for the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#rendering_engine RobomakerSimulationApplication#rendering_engine}

---

##### `sources`<sup>Optional</sup> <a name="sources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.sources"></a>

```java
public IResolvable|java.util.List<RobomakerSimulationApplicationSources> getSources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>>

The sources of the simulation application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#sources RobomakerSimulationApplication#sources}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#tags RobomakerSimulationApplication#tags}

---

### RobomakerSimulationApplicationRenderingEngine <a name="RobomakerSimulationApplicationRenderingEngine" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.Initializer"></a>

```java
import io.cdktn.providers.awscc.robomaker_simulation_application.RobomakerSimulationApplicationRenderingEngine;

RobomakerSimulationApplicationRenderingEngine.builder()
//  .name(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.property.name">name</a></code> | <code>java.lang.String</code> | The name of the rendering engine. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.property.version">version</a></code> | <code>java.lang.String</code> | The version of the rendering engine. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the rendering engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The version of the rendering engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#version RobomakerSimulationApplication#version}

---

### RobomakerSimulationApplicationRobotSoftwareSuite <a name="RobomakerSimulationApplicationRobotSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.Initializer"></a>

```java
import io.cdktn.providers.awscc.robomaker_simulation_application.RobomakerSimulationApplicationRobotSoftwareSuite;

RobomakerSimulationApplicationRobotSoftwareSuite.builder()
    .name(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.property.name">name</a></code> | <code>java.lang.String</code> | The name of the robot software suite. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.property.version">version</a></code> | <code>java.lang.String</code> | The version of the robot software suite. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The version of the robot software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#version RobomakerSimulationApplication#version}

---

### RobomakerSimulationApplicationSimulationSoftwareSuite <a name="RobomakerSimulationApplicationSimulationSoftwareSuite" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.Initializer"></a>

```java
import io.cdktn.providers.awscc.robomaker_simulation_application.RobomakerSimulationApplicationSimulationSoftwareSuite;

RobomakerSimulationApplicationSimulationSoftwareSuite.builder()
    .name(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.property.name">name</a></code> | <code>java.lang.String</code> | The name of the simulation software suite. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.property.version">version</a></code> | <code>java.lang.String</code> | The version of the simulation software suite. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the simulation software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#name RobomakerSimulationApplication#name}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The version of the simulation software suite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#version RobomakerSimulationApplication#version}

---

### RobomakerSimulationApplicationSources <a name="RobomakerSimulationApplicationSources" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.Initializer"></a>

```java
import io.cdktn.providers.awscc.robomaker_simulation_application.RobomakerSimulationApplicationSources;

RobomakerSimulationApplicationSources.builder()
//  .architecture(java.lang.String)
//  .s3Bucket(java.lang.String)
//  .s3Key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.architecture">architecture</a></code> | <code>java.lang.String</code> | The target processor architecture for the application. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | The Amazon S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | The s3 object key. |

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

The target processor architecture for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#architecture RobomakerSimulationApplication#architecture}

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

The Amazon S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#s3_bucket RobomakerSimulationApplication#s3_bucket}

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

The s3 object key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/robomaker_simulation_application#s3_key RobomakerSimulationApplication#s3_key}

---

## Classes <a name="Classes" id="Classes"></a>

### RobomakerSimulationApplicationRenderingEngineOutputReference <a name="RobomakerSimulationApplicationRenderingEngineOutputReference" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.robomaker_simulation_application.RobomakerSimulationApplicationRenderingEngineOutputReference;

new RobomakerSimulationApplicationRenderingEngineOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngineOutputReference.property.internalValue"></a>

```java
public IResolvable|RobomakerSimulationApplicationRenderingEngine getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRenderingEngine">RobomakerSimulationApplicationRenderingEngine</a>

---


### RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference <a name="RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.robomaker_simulation_application.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference;

new RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuiteOutputReference.property.internalValue"></a>

```java
public IResolvable|RobomakerSimulationApplicationRobotSoftwareSuite getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationRobotSoftwareSuite">RobomakerSimulationApplicationRobotSoftwareSuite</a>

---


### RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference <a name="RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.robomaker_simulation_application.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference;

new RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuiteOutputReference.property.internalValue"></a>

```java
public IResolvable|RobomakerSimulationApplicationSimulationSoftwareSuite getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSimulationSoftwareSuite">RobomakerSimulationApplicationSimulationSoftwareSuite</a>

---


### RobomakerSimulationApplicationSourcesList <a name="RobomakerSimulationApplicationSourcesList" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.robomaker_simulation_application.RobomakerSimulationApplicationSourcesList;

new RobomakerSimulationApplicationSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.get"></a>

```java
public RobomakerSimulationApplicationSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<RobomakerSimulationApplicationSources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>>

---


### RobomakerSimulationApplicationSourcesOutputReference <a name="RobomakerSimulationApplicationSourcesOutputReference" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.robomaker_simulation_application.RobomakerSimulationApplicationSourcesOutputReference;

new RobomakerSimulationApplicationSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetArchitecture">resetArchitecture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetS3Key">resetS3Key</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArchitecture` <a name="resetArchitecture" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetArchitecture"></a>

```java
public void resetArchitecture()
```

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetS3Bucket"></a>

```java
public void resetS3Bucket()
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.resetS3Key"></a>

```java
public void resetS3Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.architectureInput">architectureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.architecture">architecture</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `architectureInput`<sup>Optional</sup> <a name="architectureInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.architectureInput"></a>

```java
public java.lang.String getArchitectureInput();
```

- *Type:* java.lang.String

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3BucketInput"></a>

```java
public java.lang.String getS3BucketInput();
```

- *Type:* java.lang.String

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3KeyInput"></a>

```java
public java.lang.String getS3KeyInput();
```

- *Type:* java.lang.String

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.architecture"></a>

```java
public java.lang.String getArchitecture();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|RobomakerSimulationApplicationSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.robomakerSimulationApplication.RobomakerSimulationApplicationSources">RobomakerSimulationApplicationSources</a>

---



