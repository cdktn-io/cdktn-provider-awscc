# `kinesisanalyticsv2Application` Submodule <a name="`kinesisanalyticsv2Application` Submodule" id="@cdktn/provider-awscc.kinesisanalyticsv2Application"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Kinesisanalyticsv2Application <a name="Kinesisanalyticsv2Application" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application awscc_kinesisanalyticsv2_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2Application;

Kinesisanalyticsv2Application.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .runtimeEnvironment(java.lang.String)
    .serviceExecutionRole(java.lang.String)
//  .applicationConfiguration(Kinesisanalyticsv2ApplicationApplicationConfiguration)
//  .applicationDescription(java.lang.String)
//  .applicationMaintenanceConfiguration(Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration)
//  .applicationMode(java.lang.String)
//  .applicationName(java.lang.String)
//  .runConfiguration(Kinesisanalyticsv2ApplicationRunConfiguration)
//  .tags(IResolvable|java.util.List<Kinesisanalyticsv2ApplicationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.runtimeEnvironment">runtimeEnvironment</a></code> | <code>java.lang.String</code> | The runtime environment for the application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.serviceExecutionRole">serviceExecutionRole</a></code> | <code>java.lang.String</code> | Specifies the IAM role that the application uses to access external resources. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.applicationConfiguration">applicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfiguration</a></code> | Use this parameter to configure the application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.applicationDescription">applicationDescription</a></code> | <code>java.lang.String</code> | The description of the application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.applicationMaintenanceConfiguration">applicationMaintenanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration">Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration</a></code> | Used to configure start of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.applicationMode">applicationMode</a></code> | <code>java.lang.String</code> | To create a Kinesis Data Analytics Studio notebook, you must set the mode to `INTERACTIVE`. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.applicationName">applicationName</a></code> | <code>java.lang.String</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.runConfiguration">runConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfiguration">Kinesisanalyticsv2ApplicationRunConfiguration</a></code> | Specifies run configuration (start parameters) of a Kinesis Data Analytics application. Evaluated on update for RUNNING applications an only. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTags">Kinesisanalyticsv2ApplicationTags</a>></code> | A list of one or more tags to assign to the application. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `runtimeEnvironment`<sup>Required</sup> <a name="runtimeEnvironment" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.runtimeEnvironment"></a>

- *Type:* java.lang.String

The runtime environment for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#runtime_environment Kinesisanalyticsv2Application#runtime_environment}

---

##### `serviceExecutionRole`<sup>Required</sup> <a name="serviceExecutionRole" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.serviceExecutionRole"></a>

- *Type:* java.lang.String

Specifies the IAM role that the application uses to access external resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#service_execution_role Kinesisanalyticsv2Application#service_execution_role}

---

##### `applicationConfiguration`<sup>Optional</sup> <a name="applicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.applicationConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfiguration</a>

Use this parameter to configure the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#application_configuration Kinesisanalyticsv2Application#application_configuration}

---

##### `applicationDescription`<sup>Optional</sup> <a name="applicationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.applicationDescription"></a>

- *Type:* java.lang.String

The description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#application_description Kinesisanalyticsv2Application#application_description}

---

##### `applicationMaintenanceConfiguration`<sup>Optional</sup> <a name="applicationMaintenanceConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.applicationMaintenanceConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration">Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration</a>

Used to configure start of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#application_maintenance_configuration Kinesisanalyticsv2Application#application_maintenance_configuration}

---

##### `applicationMode`<sup>Optional</sup> <a name="applicationMode" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.applicationMode"></a>

- *Type:* java.lang.String

To create a Kinesis Data Analytics Studio notebook, you must set the mode to `INTERACTIVE`.

However, for a Kinesis Data Analytics for Apache Flink application, the mode is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#application_mode Kinesisanalyticsv2Application#application_mode}

---

##### `applicationName`<sup>Optional</sup> <a name="applicationName" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.applicationName"></a>

- *Type:* java.lang.String

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#application_name Kinesisanalyticsv2Application#application_name}

---

##### `runConfiguration`<sup>Optional</sup> <a name="runConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.runConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfiguration">Kinesisanalyticsv2ApplicationRunConfiguration</a>

Specifies run configuration (start parameters) of a Kinesis Data Analytics application. Evaluated on update for RUNNING applications an only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#run_configuration Kinesisanalyticsv2Application#run_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTags">Kinesisanalyticsv2ApplicationTags</a>>

A list of one or more tags to assign to the application.

A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#tags Kinesisanalyticsv2Application#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.putApplicationConfiguration">putApplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.putApplicationMaintenanceConfiguration">putApplicationMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.putRunConfiguration">putRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.resetApplicationConfiguration">resetApplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.resetApplicationDescription">resetApplicationDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.resetApplicationMaintenanceConfiguration">resetApplicationMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.resetApplicationMode">resetApplicationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.resetApplicationName">resetApplicationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.resetRunConfiguration">resetRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationConfiguration` <a name="putApplicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.putApplicationConfiguration"></a>

```java
public void putApplicationConfiguration(Kinesisanalyticsv2ApplicationApplicationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.putApplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfiguration</a>

---

##### `putApplicationMaintenanceConfiguration` <a name="putApplicationMaintenanceConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.putApplicationMaintenanceConfiguration"></a>

```java
public void putApplicationMaintenanceConfiguration(Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.putApplicationMaintenanceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration">Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration</a>

---

##### `putRunConfiguration` <a name="putRunConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.putRunConfiguration"></a>

```java
public void putRunConfiguration(Kinesisanalyticsv2ApplicationRunConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.putRunConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfiguration">Kinesisanalyticsv2ApplicationRunConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<Kinesisanalyticsv2ApplicationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTags">Kinesisanalyticsv2ApplicationTags</a>>

---

##### `resetApplicationConfiguration` <a name="resetApplicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.resetApplicationConfiguration"></a>

```java
public void resetApplicationConfiguration()
```

##### `resetApplicationDescription` <a name="resetApplicationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.resetApplicationDescription"></a>

```java
public void resetApplicationDescription()
```

##### `resetApplicationMaintenanceConfiguration` <a name="resetApplicationMaintenanceConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.resetApplicationMaintenanceConfiguration"></a>

```java
public void resetApplicationMaintenanceConfiguration()
```

##### `resetApplicationMode` <a name="resetApplicationMode" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.resetApplicationMode"></a>

```java
public void resetApplicationMode()
```

##### `resetApplicationName` <a name="resetApplicationName" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.resetApplicationName"></a>

```java
public void resetApplicationName()
```

##### `resetRunConfiguration` <a name="resetRunConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.resetRunConfiguration"></a>

```java
public void resetRunConfiguration()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Kinesisanalyticsv2Application resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.isConstruct"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2Application;

Kinesisanalyticsv2Application.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2Application;

Kinesisanalyticsv2Application.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2Application;

Kinesisanalyticsv2Application.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2Application;

Kinesisanalyticsv2Application.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Kinesisanalyticsv2Application.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Kinesisanalyticsv2Application resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Kinesisanalyticsv2Application to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Kinesisanalyticsv2Application that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Kinesisanalyticsv2Application to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationConfiguration">applicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationMaintenanceConfiguration">applicationMaintenanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.runConfiguration">runConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference">Kinesisanalyticsv2ApplicationRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList">Kinesisanalyticsv2ApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationConfigurationInput">applicationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationDescriptionInput">applicationDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationMaintenanceConfigurationInput">applicationMaintenanceConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration">Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationModeInput">applicationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationNameInput">applicationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.runConfigurationInput">runConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfiguration">Kinesisanalyticsv2ApplicationRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.runtimeEnvironmentInput">runtimeEnvironmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.serviceExecutionRoleInput">serviceExecutionRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTags">Kinesisanalyticsv2ApplicationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationDescription">applicationDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationMode">applicationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.runtimeEnvironment">runtimeEnvironment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.serviceExecutionRole">serviceExecutionRole</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationConfiguration`<sup>Required</sup> <a name="applicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference getApplicationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference</a>

---

##### `applicationMaintenanceConfiguration`<sup>Required</sup> <a name="applicationMaintenanceConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationMaintenanceConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference getApplicationMaintenanceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `runConfiguration`<sup>Required</sup> <a name="runConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.runConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationRunConfigurationOutputReference getRunConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference">Kinesisanalyticsv2ApplicationRunConfigurationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.tags"></a>

```java
public Kinesisanalyticsv2ApplicationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList">Kinesisanalyticsv2ApplicationTagsList</a>

---

##### `applicationConfigurationInput`<sup>Optional</sup> <a name="applicationConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationConfigurationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfiguration getApplicationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfiguration</a>

---

##### `applicationDescriptionInput`<sup>Optional</sup> <a name="applicationDescriptionInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationDescriptionInput"></a>

```java
public java.lang.String getApplicationDescriptionInput();
```

- *Type:* java.lang.String

---

##### `applicationMaintenanceConfigurationInput`<sup>Optional</sup> <a name="applicationMaintenanceConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationMaintenanceConfigurationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration getApplicationMaintenanceConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration">Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration</a>

---

##### `applicationModeInput`<sup>Optional</sup> <a name="applicationModeInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationModeInput"></a>

```java
public java.lang.String getApplicationModeInput();
```

- *Type:* java.lang.String

---

##### `applicationNameInput`<sup>Optional</sup> <a name="applicationNameInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationNameInput"></a>

```java
public java.lang.String getApplicationNameInput();
```

- *Type:* java.lang.String

---

##### `runConfigurationInput`<sup>Optional</sup> <a name="runConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.runConfigurationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationRunConfiguration getRunConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfiguration">Kinesisanalyticsv2ApplicationRunConfiguration</a>

---

##### `runtimeEnvironmentInput`<sup>Optional</sup> <a name="runtimeEnvironmentInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.runtimeEnvironmentInput"></a>

```java
public java.lang.String getRuntimeEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `serviceExecutionRoleInput`<sup>Optional</sup> <a name="serviceExecutionRoleInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.serviceExecutionRoleInput"></a>

```java
public java.lang.String getServiceExecutionRoleInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.tagsInput"></a>

```java
public IResolvable|java.util.List<Kinesisanalyticsv2ApplicationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTags">Kinesisanalyticsv2ApplicationTags</a>>

---

##### `applicationDescription`<sup>Required</sup> <a name="applicationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationDescription"></a>

```java
public java.lang.String getApplicationDescription();
```

- *Type:* java.lang.String

---

##### `applicationMode`<sup>Required</sup> <a name="applicationMode" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationMode"></a>

```java
public java.lang.String getApplicationMode();
```

- *Type:* java.lang.String

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

---

##### `runtimeEnvironment`<sup>Required</sup> <a name="runtimeEnvironment" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.runtimeEnvironment"></a>

```java
public java.lang.String getRuntimeEnvironment();
```

- *Type:* java.lang.String

---

##### `serviceExecutionRole`<sup>Required</sup> <a name="serviceExecutionRole" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.serviceExecutionRole"></a>

```java
public java.lang.String getServiceExecutionRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2Application.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Kinesisanalyticsv2ApplicationApplicationConfiguration <a name="Kinesisanalyticsv2ApplicationApplicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfiguration;

Kinesisanalyticsv2ApplicationApplicationConfiguration.builder()
//  .applicationCodeConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration)
//  .applicationEncryptionConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration)
//  .applicationSnapshotConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration)
//  .applicationSystemRollbackConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration)
//  .environmentProperties(Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties)
//  .flinkApplicationConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration)
//  .vpcConfigurations(IResolvable|java.util.List<Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations>)
//  .zeppelinApplicationConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration.property.applicationCodeConfiguration">applicationCodeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration</a></code> | The code location and type parameters for a Flink-based Kinesis Data Analytics application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration.property.applicationEncryptionConfiguration">applicationEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration</a></code> | Describes whether customer managed key is enabled and key details for customer data encryption. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration.property.applicationSnapshotConfiguration">applicationSnapshotConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration</a></code> | Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration.property.applicationSystemRollbackConfiguration">applicationSystemRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration</a></code> | Describes whether system initiated rollbacks are enabled for a Flink-based Kinesis Data Analytics application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration.property.environmentProperties">environmentProperties</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties</a></code> | Describes execution properties for a Flink-based Kinesis Data Analytics application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration.property.flinkApplicationConfiguration">flinkApplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration</a></code> | The creation and update parameters for a Flink-based Kinesis Data Analytics application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration.property.vpcConfigurations">vpcConfigurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations">Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations</a>></code> | The array of descriptions of VPC configurations available to the application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration.property.zeppelinApplicationConfiguration">zeppelinApplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration</a></code> | The configuration parameters for a Kinesis Data Analytics Studio notebook. |

---

##### `applicationCodeConfiguration`<sup>Optional</sup> <a name="applicationCodeConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration.property.applicationCodeConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration getApplicationCodeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration</a>

The code location and type parameters for a Flink-based Kinesis Data Analytics application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#application_code_configuration Kinesisanalyticsv2Application#application_code_configuration}

---

##### `applicationEncryptionConfiguration`<sup>Optional</sup> <a name="applicationEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration.property.applicationEncryptionConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration getApplicationEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration</a>

Describes whether customer managed key is enabled and key details for customer data encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#application_encryption_configuration Kinesisanalyticsv2Application#application_encryption_configuration}

---

##### `applicationSnapshotConfiguration`<sup>Optional</sup> <a name="applicationSnapshotConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration.property.applicationSnapshotConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration getApplicationSnapshotConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration</a>

Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#application_snapshot_configuration Kinesisanalyticsv2Application#application_snapshot_configuration}

---

##### `applicationSystemRollbackConfiguration`<sup>Optional</sup> <a name="applicationSystemRollbackConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration.property.applicationSystemRollbackConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration getApplicationSystemRollbackConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration</a>

Describes whether system initiated rollbacks are enabled for a Flink-based Kinesis Data Analytics application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#application_system_rollback_configuration Kinesisanalyticsv2Application#application_system_rollback_configuration}

---

##### `environmentProperties`<sup>Optional</sup> <a name="environmentProperties" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration.property.environmentProperties"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties getEnvironmentProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties</a>

Describes execution properties for a Flink-based Kinesis Data Analytics application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#environment_properties Kinesisanalyticsv2Application#environment_properties}

---

##### `flinkApplicationConfiguration`<sup>Optional</sup> <a name="flinkApplicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration.property.flinkApplicationConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration getFlinkApplicationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration</a>

The creation and update parameters for a Flink-based Kinesis Data Analytics application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#flink_application_configuration Kinesisanalyticsv2Application#flink_application_configuration}

---

##### `vpcConfigurations`<sup>Optional</sup> <a name="vpcConfigurations" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration.property.vpcConfigurations"></a>

```java
public IResolvable|java.util.List<Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations> getVpcConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations">Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations</a>>

The array of descriptions of VPC configurations available to the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#vpc_configurations Kinesisanalyticsv2Application#vpc_configurations}

---

##### `zeppelinApplicationConfiguration`<sup>Optional</sup> <a name="zeppelinApplicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration.property.zeppelinApplicationConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration getZeppelinApplicationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration</a>

The configuration parameters for a Kinesis Data Analytics Studio notebook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#zeppelin_application_configuration Kinesisanalyticsv2Application#zeppelin_application_configuration}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration;

Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration.builder()
//  .codeContent(Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent)
//  .codeContentType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration.property.codeContent">codeContent</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent</a></code> | The location and type of the application code. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration.property.codeContentType">codeContentType</a></code> | <code>java.lang.String</code> | Specifies whether the code content is in text or zip format. |

---

##### `codeContent`<sup>Optional</sup> <a name="codeContent" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration.property.codeContent"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent getCodeContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent</a>

The location and type of the application code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#code_content Kinesisanalyticsv2Application#code_content}

---

##### `codeContentType`<sup>Optional</sup> <a name="codeContentType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration.property.codeContentType"></a>

```java
public java.lang.String getCodeContentType();
```

- *Type:* java.lang.String

Specifies whether the code content is in text or zip format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#code_content_type Kinesisanalyticsv2Application#code_content_type}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent;

Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent.builder()
//  .s3ContentLocation(Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation)
//  .textContent(java.lang.String)
//  .zipFileContent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent.property.s3ContentLocation">s3ContentLocation</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation</a></code> | Information about the Amazon S3 bucket that contains the application code. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent.property.textContent">textContent</a></code> | <code>java.lang.String</code> | The text-format code for a Kinesis Data Analytics Studio notebook, as a Zeppelin note JSON object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent.property.zipFileContent">zipFileContent</a></code> | <code>java.lang.String</code> | The zip-format code for a Flink-based Kinesis Data Analytics application. |

---

##### `s3ContentLocation`<sup>Optional</sup> <a name="s3ContentLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent.property.s3ContentLocation"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation getS3ContentLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation</a>

Information about the Amazon S3 bucket that contains the application code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#s3_content_location Kinesisanalyticsv2Application#s3_content_location}

---

##### `textContent`<sup>Optional</sup> <a name="textContent" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent.property.textContent"></a>

```java
public java.lang.String getTextContent();
```

- *Type:* java.lang.String

The text-format code for a Kinesis Data Analytics Studio notebook, as a Zeppelin note JSON object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#text_content Kinesisanalyticsv2Application#text_content}

---

##### `zipFileContent`<sup>Optional</sup> <a name="zipFileContent" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent.property.zipFileContent"></a>

```java
public java.lang.String getZipFileContent();
```

- *Type:* java.lang.String

The zip-format code for a Flink-based Kinesis Data Analytics application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#zip_file_content Kinesisanalyticsv2Application#zip_file_content}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation;

Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation.builder()
//  .bucketArn(java.lang.String)
//  .fileKey(java.lang.String)
//  .objectVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the S3 bucket containing the application code. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation.property.fileKey">fileKey</a></code> | <code>java.lang.String</code> | The file key for the object containing the application code. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation.property.objectVersion">objectVersion</a></code> | <code>java.lang.String</code> | The version of the object containing the application code. |

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the S3 bucket containing the application code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#bucket_arn Kinesisanalyticsv2Application#bucket_arn}

---

##### `fileKey`<sup>Optional</sup> <a name="fileKey" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation.property.fileKey"></a>

```java
public java.lang.String getFileKey();
```

- *Type:* java.lang.String

The file key for the object containing the application code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#file_key Kinesisanalyticsv2Application#file_key}

---

##### `objectVersion`<sup>Optional</sup> <a name="objectVersion" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation.property.objectVersion"></a>

```java
public java.lang.String getObjectVersion();
```

- *Type:* java.lang.String

The version of the object containing the application code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#object_version Kinesisanalyticsv2Application#object_version}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration;

Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration.builder()
//  .keyId(java.lang.String)
//  .keyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration.property.keyId">keyId</a></code> | <code>java.lang.String</code> | KMS KeyId. Can be either key uuid or full key arn or key alias arn or short key alias. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration.property.keyType">keyType</a></code> | <code>java.lang.String</code> | Specifies whether application data is encrypted using service key: AWS_OWNED_KEY or customer key: CUSTOMER_MANAGED_KEY. |

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

KMS KeyId. Can be either key uuid or full key arn or key alias arn or short key alias.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#key_id Kinesisanalyticsv2Application#key_id}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

Specifies whether application data is encrypted using service key: AWS_OWNED_KEY or customer key: CUSTOMER_MANAGED_KEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#key_type Kinesisanalyticsv2Application#key_type}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration;

Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration.builder()
//  .snapshotMode(java.lang.String)
//  .snapshotsEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration.property.snapshotMode">snapshotMode</a></code> | <code>java.lang.String</code> | The snapshot mode of a Flink-based Kinesis Data Analytics application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration.property.snapshotsEnabled">snapshotsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application. |

---

##### `snapshotMode`<sup>Optional</sup> <a name="snapshotMode" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration.property.snapshotMode"></a>

```java
public java.lang.String getSnapshotMode();
```

- *Type:* java.lang.String

The snapshot mode of a Flink-based Kinesis Data Analytics application.

Changing from APPLICATION_SNAPSHOTS_LEGACY to ENHANCED_SNAPSHOTS is one-way; an application in ENHANCED_SNAPSHOTS mode cannot return to APPLICATION_SNAPSHOTS_LEGACY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#snapshot_mode Kinesisanalyticsv2Application#snapshot_mode}

---

##### `snapshotsEnabled`<sup>Optional</sup> <a name="snapshotsEnabled" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration.property.snapshotsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSnapshotsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#snapshots_enabled Kinesisanalyticsv2Application#snapshots_enabled}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration;

Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration.builder()
//  .rollbackEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration.property.rollbackEnabled">rollbackEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Describes whether system initiated rollbacks are enabled for a Flink-based Kinesis Data Analytics application. |

---

##### `rollbackEnabled`<sup>Optional</sup> <a name="rollbackEnabled" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration.property.rollbackEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRollbackEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Describes whether system initiated rollbacks are enabled for a Flink-based Kinesis Data Analytics application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#rollback_enabled Kinesisanalyticsv2Application#rollback_enabled}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties;

Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties.builder()
//  .propertyGroups(IResolvable|java.util.List<Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties.property.propertyGroups">propertyGroups</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups</a>></code> | Describes the execution property groups. |

---

##### `propertyGroups`<sup>Optional</sup> <a name="propertyGroups" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties.property.propertyGroups"></a>

```java
public IResolvable|java.util.List<Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups> getPropertyGroups();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups</a>>

Describes the execution property groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#property_groups Kinesisanalyticsv2Application#property_groups}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups;

Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups.builder()
//  .propertyGroupId(java.lang.String)
//  .propertyMap(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups.property.propertyGroupId">propertyGroupId</a></code> | <code>java.lang.String</code> | Describes the key of an application execution property key-value pair. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups.property.propertyMap">propertyMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Describes the value of an application execution property key-value pair. |

---

##### `propertyGroupId`<sup>Optional</sup> <a name="propertyGroupId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups.property.propertyGroupId"></a>

```java
public java.lang.String getPropertyGroupId();
```

- *Type:* java.lang.String

Describes the key of an application execution property key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#property_group_id Kinesisanalyticsv2Application#property_group_id}

---

##### `propertyMap`<sup>Optional</sup> <a name="propertyMap" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups.property.propertyMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertyMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Describes the value of an application execution property key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#property_map Kinesisanalyticsv2Application#property_map}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration;

Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration.builder()
//  .checkpointConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration)
//  .monitoringConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration)
//  .parallelismConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration.property.checkpointConfiguration">checkpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration</a></code> | Describes an application's checkpointing configuration. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration.property.monitoringConfiguration">monitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration</a></code> | Describes configuration parameters for Amazon CloudWatch logging for an application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration.property.parallelismConfiguration">parallelismConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration</a></code> | Describes parameters for how an application executes multiple tasks simultaneously. |

---

##### `checkpointConfiguration`<sup>Optional</sup> <a name="checkpointConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration.property.checkpointConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration getCheckpointConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration</a>

Describes an application's checkpointing configuration.

Checkpointing is the process of persisting application state for fault tolerance. For more information, see Checkpoints for Fault Tolerance in the Apache Flink Documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#checkpoint_configuration Kinesisanalyticsv2Application#checkpoint_configuration}

---

##### `monitoringConfiguration`<sup>Optional</sup> <a name="monitoringConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration.property.monitoringConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration getMonitoringConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration</a>

Describes configuration parameters for Amazon CloudWatch logging for an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#monitoring_configuration Kinesisanalyticsv2Application#monitoring_configuration}

---

##### `parallelismConfiguration`<sup>Optional</sup> <a name="parallelismConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration.property.parallelismConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration getParallelismConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration</a>

Describes parameters for how an application executes multiple tasks simultaneously.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#parallelism_configuration Kinesisanalyticsv2Application#parallelism_configuration}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration;

Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration.builder()
//  .checkpointingEnabled(java.lang.Boolean|IResolvable)
//  .checkpointInterval(java.lang.Number)
//  .configurationType(java.lang.String)
//  .minPauseBetweenCheckpoints(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration.property.checkpointingEnabled">checkpointingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Describes whether checkpointing is enabled for a Flink-based Kinesis Data Analytics application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration.property.checkpointInterval">checkpointInterval</a></code> | <code>java.lang.Number</code> | Describes the interval in milliseconds between checkpoint operations. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration.property.configurationType">configurationType</a></code> | <code>java.lang.String</code> | Describes whether the application uses Kinesis Data Analytics' default checkpointing behavior. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration.property.minPauseBetweenCheckpoints">minPauseBetweenCheckpoints</a></code> | <code>java.lang.Number</code> | Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start. |

---

##### `checkpointingEnabled`<sup>Optional</sup> <a name="checkpointingEnabled" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration.property.checkpointingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCheckpointingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Describes whether checkpointing is enabled for a Flink-based Kinesis Data Analytics application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#checkpointing_enabled Kinesisanalyticsv2Application#checkpointing_enabled}

---

##### `checkpointInterval`<sup>Optional</sup> <a name="checkpointInterval" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration.property.checkpointInterval"></a>

```java
public java.lang.Number getCheckpointInterval();
```

- *Type:* java.lang.Number

Describes the interval in milliseconds between checkpoint operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#checkpoint_interval Kinesisanalyticsv2Application#checkpoint_interval}

---

##### `configurationType`<sup>Optional</sup> <a name="configurationType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration.property.configurationType"></a>

```java
public java.lang.String getConfigurationType();
```

- *Type:* java.lang.String

Describes whether the application uses Kinesis Data Analytics' default checkpointing behavior.

You must set this property to `CUSTOM` in order to set the `CheckpointingEnabled`, `CheckpointInterval`, or `MinPauseBetweenCheckpoints` parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#configuration_type Kinesisanalyticsv2Application#configuration_type}

---

##### `minPauseBetweenCheckpoints`<sup>Optional</sup> <a name="minPauseBetweenCheckpoints" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration.property.minPauseBetweenCheckpoints"></a>

```java
public java.lang.Number getMinPauseBetweenCheckpoints();
```

- *Type:* java.lang.Number

Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start.

If a checkpoint operation takes longer than the CheckpointInterval, the application otherwise performs continual checkpoint operations. For more information, see Tuning Checkpointing in the Apache Flink Documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#min_pause_between_checkpoints Kinesisanalyticsv2Application#min_pause_between_checkpoints}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration;

Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration.builder()
//  .configurationType(java.lang.String)
//  .logLevel(java.lang.String)
//  .metricsLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration.property.configurationType">configurationType</a></code> | <code>java.lang.String</code> | Describes whether to use the default CloudWatch logging configuration for an application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Describes the verbosity of the CloudWatch Logs for an application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration.property.metricsLevel">metricsLevel</a></code> | <code>java.lang.String</code> | Describes the granularity of the CloudWatch Logs for an application. |

---

##### `configurationType`<sup>Optional</sup> <a name="configurationType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration.property.configurationType"></a>

```java
public java.lang.String getConfigurationType();
```

- *Type:* java.lang.String

Describes whether to use the default CloudWatch logging configuration for an application.

You must set this property to CUSTOM in order to set the LogLevel or MetricsLevel parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#configuration_type Kinesisanalyticsv2Application#configuration_type}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

Describes the verbosity of the CloudWatch Logs for an application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#log_level Kinesisanalyticsv2Application#log_level}

---

##### `metricsLevel`<sup>Optional</sup> <a name="metricsLevel" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration.property.metricsLevel"></a>

```java
public java.lang.String getMetricsLevel();
```

- *Type:* java.lang.String

Describes the granularity of the CloudWatch Logs for an application.

The Parallelism level is not recommended for applications with a Parallelism over 64 due to excessive costs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#metrics_level Kinesisanalyticsv2Application#metrics_level}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration;

Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration.builder()
//  .autoScalingEnabled(java.lang.Boolean|IResolvable)
//  .configurationType(java.lang.String)
//  .parallelism(java.lang.Number)
//  .parallelismPerKpu(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration.property.autoScalingEnabled">autoScalingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration.property.configurationType">configurationType</a></code> | <code>java.lang.String</code> | Describes whether the application uses the default parallelism for the Kinesis Data Analytics service. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration.property.parallelism">parallelism</a></code> | <code>java.lang.Number</code> | Describes the initial number of parallel tasks that a Java-based Kinesis Data Analytics application can perform. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration.property.parallelismPerKpu">parallelismPerKpu</a></code> | <code>java.lang.Number</code> | Describes the number of parallel tasks that a Java-based Kinesis Data Analytics application can perform per Kinesis Processing Unit (KPU) used by the application. |

---

##### `autoScalingEnabled`<sup>Optional</sup> <a name="autoScalingEnabled" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration.property.autoScalingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoScalingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#auto_scaling_enabled Kinesisanalyticsv2Application#auto_scaling_enabled}

---

##### `configurationType`<sup>Optional</sup> <a name="configurationType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration.property.configurationType"></a>

```java
public java.lang.String getConfigurationType();
```

- *Type:* java.lang.String

Describes whether the application uses the default parallelism for the Kinesis Data Analytics service.

You must set this property to `CUSTOM` in order to change your application's `AutoScalingEnabled`, `Parallelism`, or `ParallelismPerKPU` properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#configuration_type Kinesisanalyticsv2Application#configuration_type}

---

##### `parallelism`<sup>Optional</sup> <a name="parallelism" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration.property.parallelism"></a>

```java
public java.lang.Number getParallelism();
```

- *Type:* java.lang.Number

Describes the initial number of parallel tasks that a Java-based Kinesis Data Analytics application can perform.

The Kinesis Data Analytics service can increase this number automatically if ParallelismConfiguration:AutoScalingEnabled is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#parallelism Kinesisanalyticsv2Application#parallelism}

---

##### `parallelismPerKpu`<sup>Optional</sup> <a name="parallelismPerKpu" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration.property.parallelismPerKpu"></a>

```java
public java.lang.Number getParallelismPerKpu();
```

- *Type:* java.lang.Number

Describes the number of parallel tasks that a Java-based Kinesis Data Analytics application can perform per Kinesis Processing Unit (KPU) used by the application.

For more information about KPUs, see Amazon Kinesis Data Analytics Pricing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#parallelism_per_kpu Kinesisanalyticsv2Application#parallelism_per_kpu}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations;

Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations.builder()
//  .securityGroupIds(java.util.List<java.lang.String>)
//  .subnetIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | The array of SecurityGroup IDs used by the VPC configuration. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | The array of Subnet IDs used by the VPC configuration. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

The array of SecurityGroup IDs used by the VPC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#security_group_ids Kinesisanalyticsv2Application#security_group_ids}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

The array of Subnet IDs used by the VPC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#subnet_ids Kinesisanalyticsv2Application#subnet_ids}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration;

Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration.builder()
//  .catalogConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration)
//  .customArtifactsConfiguration(IResolvable|java.util.List<Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration>)
//  .deployAsApplicationConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration)
//  .monitoringConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration.property.catalogConfiguration">catalogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration</a></code> | The Amazon Glue Data Catalog that you use in queries in a Kinesis Data Analytics Studio notebook. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration.property.customArtifactsConfiguration">customArtifactsConfiguration</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration</a>></code> | A list of CustomArtifactConfiguration objects. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration.property.deployAsApplicationConfiguration">deployAsApplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration</a></code> | The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration.property.monitoringConfiguration">monitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration</a></code> | The monitoring configuration of a Kinesis Data Analytics Studio notebook. |

---

##### `catalogConfiguration`<sup>Optional</sup> <a name="catalogConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration.property.catalogConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration getCatalogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration</a>

The Amazon Glue Data Catalog that you use in queries in a Kinesis Data Analytics Studio notebook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#catalog_configuration Kinesisanalyticsv2Application#catalog_configuration}

---

##### `customArtifactsConfiguration`<sup>Optional</sup> <a name="customArtifactsConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration.property.customArtifactsConfiguration"></a>

```java
public IResolvable|java.util.List<Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration> getCustomArtifactsConfiguration();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration</a>>

A list of CustomArtifactConfiguration objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#custom_artifacts_configuration Kinesisanalyticsv2Application#custom_artifacts_configuration}

---

##### `deployAsApplicationConfiguration`<sup>Optional</sup> <a name="deployAsApplicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration.property.deployAsApplicationConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration getDeployAsApplicationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration</a>

The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#deploy_as_application_configuration Kinesisanalyticsv2Application#deploy_as_application_configuration}

---

##### `monitoringConfiguration`<sup>Optional</sup> <a name="monitoringConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration.property.monitoringConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration getMonitoringConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration</a>

The monitoring configuration of a Kinesis Data Analytics Studio notebook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#monitoring_configuration Kinesisanalyticsv2Application#monitoring_configuration}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration;

Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration.builder()
//  .glueDataCatalogConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration.property.glueDataCatalogConfiguration">glueDataCatalogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration</a></code> | The configuration parameters for the default Amazon Glue database. |

---

##### `glueDataCatalogConfiguration`<sup>Optional</sup> <a name="glueDataCatalogConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration.property.glueDataCatalogConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration getGlueDataCatalogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration</a>

The configuration parameters for the default Amazon Glue database.

You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#glue_data_catalog_configuration Kinesisanalyticsv2Application#glue_data_catalog_configuration}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration;

Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration.builder()
//  .databaseArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration.property.databaseArn">databaseArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the database. |

---

##### `databaseArn`<sup>Optional</sup> <a name="databaseArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration.property.databaseArn"></a>

```java
public java.lang.String getDatabaseArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#database_arn Kinesisanalyticsv2Application#database_arn}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration;

Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration.builder()
//  .artifactType(java.lang.String)
//  .mavenReference(Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference)
//  .s3ContentLocation(Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration.property.artifactType">artifactType</a></code> | <code>java.lang.String</code> | Set this to either `UDF` or `DEPENDENCY_JAR`. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration.property.mavenReference">mavenReference</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference</a></code> | The parameters required to fully specify a Maven reference. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration.property.s3ContentLocation">s3ContentLocation</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation</a></code> | The location of the custom artifacts. |

---

##### `artifactType`<sup>Optional</sup> <a name="artifactType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration.property.artifactType"></a>

```java
public java.lang.String getArtifactType();
```

- *Type:* java.lang.String

Set this to either `UDF` or `DEPENDENCY_JAR`.

`UDF` stands for user-defined functions. This type of artifact must be in an S3 bucket. A `DEPENDENCY_JAR` can be in either Maven or an S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#artifact_type Kinesisanalyticsv2Application#artifact_type}

---

##### `mavenReference`<sup>Optional</sup> <a name="mavenReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration.property.mavenReference"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference getMavenReference();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference</a>

The parameters required to fully specify a Maven reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#maven_reference Kinesisanalyticsv2Application#maven_reference}

---

##### `s3ContentLocation`<sup>Optional</sup> <a name="s3ContentLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration.property.s3ContentLocation"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation getS3ContentLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation</a>

The location of the custom artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#s3_content_location Kinesisanalyticsv2Application#s3_content_location}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference;

Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference.builder()
//  .artifactId(java.lang.String)
//  .groupId(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference.property.artifactId">artifactId</a></code> | <code>java.lang.String</code> | The artifact ID of the Maven reference. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | The group ID of the Maven reference. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference.property.version">version</a></code> | <code>java.lang.String</code> | The version of the Maven reference. |

---

##### `artifactId`<sup>Optional</sup> <a name="artifactId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference.property.artifactId"></a>

```java
public java.lang.String getArtifactId();
```

- *Type:* java.lang.String

The artifact ID of the Maven reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#artifact_id Kinesisanalyticsv2Application#artifact_id}

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

The group ID of the Maven reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#group_id Kinesisanalyticsv2Application#group_id}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The version of the Maven reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#version Kinesisanalyticsv2Application#version}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation;

Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation.builder()
//  .bucketArn(java.lang.String)
//  .fileKey(java.lang.String)
//  .objectVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) for the S3 bucket containing the application code. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation.property.fileKey">fileKey</a></code> | <code>java.lang.String</code> | The file key for the object containing the application code. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation.property.objectVersion">objectVersion</a></code> | <code>java.lang.String</code> | The version of the object containing the application code. |

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) for the S3 bucket containing the application code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#bucket_arn Kinesisanalyticsv2Application#bucket_arn}

---

##### `fileKey`<sup>Optional</sup> <a name="fileKey" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation.property.fileKey"></a>

```java
public java.lang.String getFileKey();
```

- *Type:* java.lang.String

The file key for the object containing the application code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#file_key Kinesisanalyticsv2Application#file_key}

---

##### `objectVersion`<sup>Optional</sup> <a name="objectVersion" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation.property.objectVersion"></a>

```java
public java.lang.String getObjectVersion();
```

- *Type:* java.lang.String

The version of the object containing the application code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#object_version Kinesisanalyticsv2Application#object_version}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration;

Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration.builder()
//  .s3ContentLocation(Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration.property.s3ContentLocation">s3ContentLocation</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation</a></code> | The description of an Amazon S3 object that contains the Amazon Data Analytics application, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data. |

---

##### `s3ContentLocation`<sup>Optional</sup> <a name="s3ContentLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration.property.s3ContentLocation"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation getS3ContentLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation</a>

The description of an Amazon S3 object that contains the Amazon Data Analytics application, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#s3_content_location Kinesisanalyticsv2Application#s3_content_location}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation;

Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation.builder()
//  .basePath(java.lang.String)
//  .bucketArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation.property.basePath">basePath</a></code> | <code>java.lang.String</code> | The base path for the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the S3 bucket. |

---

##### `basePath`<sup>Optional</sup> <a name="basePath" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation.property.basePath"></a>

```java
public java.lang.String getBasePath();
```

- *Type:* java.lang.String

The base path for the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#base_path Kinesisanalyticsv2Application#base_path}

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#bucket_arn Kinesisanalyticsv2Application#bucket_arn}

---

### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration;

Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration.builder()
//  .logLevel(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | The verbosity of the CloudWatch Logs for an application. You can set it to `INFO`, `WARN`, `ERROR`, or `DEBUG`. |

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

The verbosity of the CloudWatch Logs for an application. You can set it to `INFO`, `WARN`, `ERROR`, or `DEBUG`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#log_level Kinesisanalyticsv2Application#log_level}

---

### Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration <a name="Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration;

Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration.builder()
//  .applicationMaintenanceWindowStartTime(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration.property.applicationMaintenanceWindowStartTime">applicationMaintenanceWindowStartTime</a></code> | <code>java.lang.String</code> | The start time for the maintenance window. |

---

##### `applicationMaintenanceWindowStartTime`<sup>Optional</sup> <a name="applicationMaintenanceWindowStartTime" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration.property.applicationMaintenanceWindowStartTime"></a>

```java
public java.lang.String getApplicationMaintenanceWindowStartTime();
```

- *Type:* java.lang.String

The start time for the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#application_maintenance_window_start_time Kinesisanalyticsv2Application#application_maintenance_window_start_time}

---

### Kinesisanalyticsv2ApplicationConfig <a name="Kinesisanalyticsv2ApplicationConfig" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationConfig;

Kinesisanalyticsv2ApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .runtimeEnvironment(java.lang.String)
    .serviceExecutionRole(java.lang.String)
//  .applicationConfiguration(Kinesisanalyticsv2ApplicationApplicationConfiguration)
//  .applicationDescription(java.lang.String)
//  .applicationMaintenanceConfiguration(Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration)
//  .applicationMode(java.lang.String)
//  .applicationName(java.lang.String)
//  .runConfiguration(Kinesisanalyticsv2ApplicationRunConfiguration)
//  .tags(IResolvable|java.util.List<Kinesisanalyticsv2ApplicationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.runtimeEnvironment">runtimeEnvironment</a></code> | <code>java.lang.String</code> | The runtime environment for the application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.serviceExecutionRole">serviceExecutionRole</a></code> | <code>java.lang.String</code> | Specifies the IAM role that the application uses to access external resources. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.applicationConfiguration">applicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfiguration</a></code> | Use this parameter to configure the application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.applicationDescription">applicationDescription</a></code> | <code>java.lang.String</code> | The description of the application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.applicationMaintenanceConfiguration">applicationMaintenanceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration">Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration</a></code> | Used to configure start of maintenance window. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.applicationMode">applicationMode</a></code> | <code>java.lang.String</code> | To create a Kinesis Data Analytics Studio notebook, you must set the mode to `INTERACTIVE`. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.applicationName">applicationName</a></code> | <code>java.lang.String</code> | The name of the application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.runConfiguration">runConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfiguration">Kinesisanalyticsv2ApplicationRunConfiguration</a></code> | Specifies run configuration (start parameters) of a Kinesis Data Analytics application. Evaluated on update for RUNNING applications an only. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTags">Kinesisanalyticsv2ApplicationTags</a>></code> | A list of one or more tags to assign to the application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `runtimeEnvironment`<sup>Required</sup> <a name="runtimeEnvironment" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.runtimeEnvironment"></a>

```java
public java.lang.String getRuntimeEnvironment();
```

- *Type:* java.lang.String

The runtime environment for the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#runtime_environment Kinesisanalyticsv2Application#runtime_environment}

---

##### `serviceExecutionRole`<sup>Required</sup> <a name="serviceExecutionRole" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.serviceExecutionRole"></a>

```java
public java.lang.String getServiceExecutionRole();
```

- *Type:* java.lang.String

Specifies the IAM role that the application uses to access external resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#service_execution_role Kinesisanalyticsv2Application#service_execution_role}

---

##### `applicationConfiguration`<sup>Optional</sup> <a name="applicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.applicationConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfiguration getApplicationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfiguration</a>

Use this parameter to configure the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#application_configuration Kinesisanalyticsv2Application#application_configuration}

---

##### `applicationDescription`<sup>Optional</sup> <a name="applicationDescription" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.applicationDescription"></a>

```java
public java.lang.String getApplicationDescription();
```

- *Type:* java.lang.String

The description of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#application_description Kinesisanalyticsv2Application#application_description}

---

##### `applicationMaintenanceConfiguration`<sup>Optional</sup> <a name="applicationMaintenanceConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.applicationMaintenanceConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration getApplicationMaintenanceConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration">Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration</a>

Used to configure start of maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#application_maintenance_configuration Kinesisanalyticsv2Application#application_maintenance_configuration}

---

##### `applicationMode`<sup>Optional</sup> <a name="applicationMode" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.applicationMode"></a>

```java
public java.lang.String getApplicationMode();
```

- *Type:* java.lang.String

To create a Kinesis Data Analytics Studio notebook, you must set the mode to `INTERACTIVE`.

However, for a Kinesis Data Analytics for Apache Flink application, the mode is optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#application_mode Kinesisanalyticsv2Application#application_mode}

---

##### `applicationName`<sup>Optional</sup> <a name="applicationName" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.applicationName"></a>

```java
public java.lang.String getApplicationName();
```

- *Type:* java.lang.String

The name of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#application_name Kinesisanalyticsv2Application#application_name}

---

##### `runConfiguration`<sup>Optional</sup> <a name="runConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.runConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationRunConfiguration getRunConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfiguration">Kinesisanalyticsv2ApplicationRunConfiguration</a>

Specifies run configuration (start parameters) of a Kinesis Data Analytics application. Evaluated on update for RUNNING applications an only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#run_configuration Kinesisanalyticsv2Application#run_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<Kinesisanalyticsv2ApplicationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTags">Kinesisanalyticsv2ApplicationTags</a>>

A list of one or more tags to assign to the application.

A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#tags Kinesisanalyticsv2Application#tags}

---

### Kinesisanalyticsv2ApplicationRunConfiguration <a name="Kinesisanalyticsv2ApplicationRunConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationRunConfiguration;

Kinesisanalyticsv2ApplicationRunConfiguration.builder()
//  .applicationRestoreConfiguration(Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration)
//  .flinkRunConfiguration(Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfiguration.property.applicationRestoreConfiguration">applicationRestoreConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration">Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration</a></code> | Describes the restore behavior of a restarting application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfiguration.property.flinkRunConfiguration">flinkRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration">Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration</a></code> | Describes the starting parameters for a Flink-based Kinesis Data Analytics application. |

---

##### `applicationRestoreConfiguration`<sup>Optional</sup> <a name="applicationRestoreConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfiguration.property.applicationRestoreConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration getApplicationRestoreConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration">Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration</a>

Describes the restore behavior of a restarting application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#application_restore_configuration Kinesisanalyticsv2Application#application_restore_configuration}

---

##### `flinkRunConfiguration`<sup>Optional</sup> <a name="flinkRunConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfiguration.property.flinkRunConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration getFlinkRunConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration">Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration</a>

Describes the starting parameters for a Flink-based Kinesis Data Analytics application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#flink_run_configuration Kinesisanalyticsv2Application#flink_run_configuration}

---

### Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration <a name="Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration;

Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration.builder()
//  .applicationRestoreType(java.lang.String)
//  .snapshotArn(java.lang.String)
//  .snapshotName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration.property.applicationRestoreType">applicationRestoreType</a></code> | <code>java.lang.String</code> | Specifies how the application should be restored. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration.property.snapshotArn">snapshotArn</a></code> | <code>java.lang.String</code> | The ARN of an existing snapshot to use to restart an application. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | The identifier of an existing snapshot of application state to use to restart an application. |

---

##### `applicationRestoreType`<sup>Optional</sup> <a name="applicationRestoreType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration.property.applicationRestoreType"></a>

```java
public java.lang.String getApplicationRestoreType();
```

- *Type:* java.lang.String

Specifies how the application should be restored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#application_restore_type Kinesisanalyticsv2Application#application_restore_type}

---

##### `snapshotArn`<sup>Optional</sup> <a name="snapshotArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration.property.snapshotArn"></a>

```java
public java.lang.String getSnapshotArn();
```

- *Type:* java.lang.String

The ARN of an existing snapshot to use to restart an application.

The application uses this value if RESTORE_FROM_CUSTOM_SNAPSHOT is specified for the ApplicationRestoreType. Specify either SnapshotName or SnapshotArn, not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#snapshot_arn Kinesisanalyticsv2Application#snapshot_arn}

---

##### `snapshotName`<sup>Optional</sup> <a name="snapshotName" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

The identifier of an existing snapshot of application state to use to restart an application.

The application uses this value if RESTORE_FROM_CUSTOM_SNAPSHOT is specified for the ApplicationRestoreType. Specify either SnapshotName or SnapshotArn, not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#snapshot_name Kinesisanalyticsv2Application#snapshot_name}

---

### Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration <a name="Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration;

Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration.builder()
//  .allowNonRestoredState(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration.property.allowNonRestoredState">allowNonRestoredState</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When restoring from a snapshot, specifies whether the runtime is allowed to skip a state that cannot be mapped to the new program. |

---

##### `allowNonRestoredState`<sup>Optional</sup> <a name="allowNonRestoredState" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration.property.allowNonRestoredState"></a>

```java
public java.lang.Boolean|IResolvable getAllowNonRestoredState();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When restoring from a snapshot, specifies whether the runtime is allowed to skip a state that cannot be mapped to the new program.

Defaults to false. If you update your application without specifying this parameter, AllowNonRestoredState will be set to false, even if it was previously set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#allow_non_restored_state Kinesisanalyticsv2Application#allow_non_restored_state}

---

### Kinesisanalyticsv2ApplicationTags <a name="Kinesisanalyticsv2ApplicationTags" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationTags;

Kinesisanalyticsv2ApplicationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. You can specify a value that's 0 to 256 characters in length. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#key Kinesisanalyticsv2Application#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag. You can specify a value that's 0 to 256 characters in length.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/kinesisanalyticsv2_application#value Kinesisanalyticsv2Application#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.putS3ContentLocation">putS3ContentLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.resetS3ContentLocation">resetS3ContentLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.resetTextContent">resetTextContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.resetZipFileContent">resetZipFileContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3ContentLocation` <a name="putS3ContentLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.putS3ContentLocation"></a>

```java
public void putS3ContentLocation(Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.putS3ContentLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation</a>

---

##### `resetS3ContentLocation` <a name="resetS3ContentLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.resetS3ContentLocation"></a>

```java
public void resetS3ContentLocation()
```

##### `resetTextContent` <a name="resetTextContent" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.resetTextContent"></a>

```java
public void resetTextContent()
```

##### `resetZipFileContent` <a name="resetZipFileContent" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.resetZipFileContent"></a>

```java
public void resetZipFileContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.s3ContentLocation">s3ContentLocation</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.s3ContentLocationInput">s3ContentLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.textContentInput">textContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.zipFileContentInput">zipFileContentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.textContent">textContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.zipFileContent">zipFileContent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3ContentLocation`<sup>Required</sup> <a name="s3ContentLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.s3ContentLocation"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference getS3ContentLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference</a>

---

##### `s3ContentLocationInput`<sup>Optional</sup> <a name="s3ContentLocationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.s3ContentLocationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation getS3ContentLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation</a>

---

##### `textContentInput`<sup>Optional</sup> <a name="textContentInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.textContentInput"></a>

```java
public java.lang.String getTextContentInput();
```

- *Type:* java.lang.String

---

##### `zipFileContentInput`<sup>Optional</sup> <a name="zipFileContentInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.zipFileContentInput"></a>

```java
public java.lang.String getZipFileContentInput();
```

- *Type:* java.lang.String

---

##### `textContent`<sup>Required</sup> <a name="textContent" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.textContent"></a>

```java
public java.lang.String getTextContent();
```

- *Type:* java.lang.String

---

##### `zipFileContent`<sup>Required</sup> <a name="zipFileContent" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.zipFileContent"></a>

```java
public java.lang.String getZipFileContent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.resetFileKey">resetFileKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.resetObjectVersion">resetObjectVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketArn` <a name="resetBucketArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.resetBucketArn"></a>

```java
public void resetBucketArn()
```

##### `resetFileKey` <a name="resetFileKey" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.resetFileKey"></a>

```java
public void resetFileKey()
```

##### `resetObjectVersion` <a name="resetObjectVersion" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.resetObjectVersion"></a>

```java
public void resetObjectVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.fileKeyInput">fileKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.objectVersionInput">objectVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.fileKey">fileKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.objectVersion">objectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.bucketArnInput"></a>

```java
public java.lang.String getBucketArnInput();
```

- *Type:* java.lang.String

---

##### `fileKeyInput`<sup>Optional</sup> <a name="fileKeyInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.fileKeyInput"></a>

```java
public java.lang.String getFileKeyInput();
```

- *Type:* java.lang.String

---

##### `objectVersionInput`<sup>Optional</sup> <a name="objectVersionInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.objectVersionInput"></a>

```java
public java.lang.String getObjectVersionInput();
```

- *Type:* java.lang.String

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

---

##### `fileKey`<sup>Required</sup> <a name="fileKey" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.fileKey"></a>

```java
public java.lang.String getFileKey();
```

- *Type:* java.lang.String

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.objectVersion"></a>

```java
public java.lang.String getObjectVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentS3ContentLocation</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.putCodeContent">putCodeContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.resetCodeContent">resetCodeContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.resetCodeContentType">resetCodeContentType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeContent` <a name="putCodeContent" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.putCodeContent"></a>

```java
public void putCodeContent(Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.putCodeContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent</a>

---

##### `resetCodeContent` <a name="resetCodeContent" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.resetCodeContent"></a>

```java
public void resetCodeContent()
```

##### `resetCodeContentType` <a name="resetCodeContentType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.resetCodeContentType"></a>

```java
public void resetCodeContentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.codeContent">codeContent</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.codeContentInput">codeContentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.codeContentTypeInput">codeContentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.codeContentType">codeContentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codeContent`<sup>Required</sup> <a name="codeContent" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.codeContent"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference getCodeContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContentOutputReference</a>

---

##### `codeContentInput`<sup>Optional</sup> <a name="codeContentInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.codeContentInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent getCodeContentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationCodeContent</a>

---

##### `codeContentTypeInput`<sup>Optional</sup> <a name="codeContentTypeInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.codeContentTypeInput"></a>

```java
public java.lang.String getCodeContentTypeInput();
```

- *Type:* java.lang.String

---

##### `codeContentType`<sup>Required</sup> <a name="codeContentType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.codeContentType"></a>

```java
public java.lang.String getCodeContentType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.resetKeyType">resetKeyType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.resetKeyId"></a>

```java
public void resetKeyId()
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.resetKeyType"></a>

```java
public void resetKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.keyTypeInput"></a>

```java
public java.lang.String getKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.resetSnapshotMode">resetSnapshotMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.resetSnapshotsEnabled">resetSnapshotsEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSnapshotMode` <a name="resetSnapshotMode" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.resetSnapshotMode"></a>

```java
public void resetSnapshotMode()
```

##### `resetSnapshotsEnabled` <a name="resetSnapshotsEnabled" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.resetSnapshotsEnabled"></a>

```java
public void resetSnapshotsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.snapshotModeInput">snapshotModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.snapshotsEnabledInput">snapshotsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.snapshotMode">snapshotMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.snapshotsEnabled">snapshotsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `snapshotModeInput`<sup>Optional</sup> <a name="snapshotModeInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.snapshotModeInput"></a>

```java
public java.lang.String getSnapshotModeInput();
```

- *Type:* java.lang.String

---

##### `snapshotsEnabledInput`<sup>Optional</sup> <a name="snapshotsEnabledInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.snapshotsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSnapshotsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `snapshotMode`<sup>Required</sup> <a name="snapshotMode" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.snapshotMode"></a>

```java
public java.lang.String getSnapshotMode();
```

- *Type:* java.lang.String

---

##### `snapshotsEnabled`<sup>Required</sup> <a name="snapshotsEnabled" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.snapshotsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSnapshotsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.resetRollbackEnabled">resetRollbackEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRollbackEnabled` <a name="resetRollbackEnabled" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.resetRollbackEnabled"></a>

```java
public void resetRollbackEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.rollbackEnabledInput">rollbackEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.rollbackEnabled">rollbackEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rollbackEnabledInput`<sup>Optional</sup> <a name="rollbackEnabledInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.rollbackEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getRollbackEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rollbackEnabled`<sup>Required</sup> <a name="rollbackEnabled" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.rollbackEnabled"></a>

```java
public java.lang.Boolean|IResolvable getRollbackEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.putPropertyGroups">putPropertyGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.resetPropertyGroups">resetPropertyGroups</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPropertyGroups` <a name="putPropertyGroups" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.putPropertyGroups"></a>

```java
public void putPropertyGroups(IResolvable|java.util.List<Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.putPropertyGroups.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups</a>>

---

##### `resetPropertyGroups` <a name="resetPropertyGroups" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.resetPropertyGroups"></a>

```java
public void resetPropertyGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.propertyGroups">propertyGroups</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.propertyGroupsInput">propertyGroupsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `propertyGroups`<sup>Required</sup> <a name="propertyGroups" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.propertyGroups"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList getPropertyGroups();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList</a>

---

##### `propertyGroupsInput`<sup>Optional</sup> <a name="propertyGroupsInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.propertyGroupsInput"></a>

```java
public IResolvable|java.util.List<Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups> getPropertyGroupsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList;

new Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.get"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups</a>>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.resetPropertyGroupId">resetPropertyGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.resetPropertyMap">resetPropertyMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPropertyGroupId` <a name="resetPropertyGroupId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.resetPropertyGroupId"></a>

```java
public void resetPropertyGroupId()
```

##### `resetPropertyMap` <a name="resetPropertyMap" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.resetPropertyMap"></a>

```java
public void resetPropertyMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.propertyGroupIdInput">propertyGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.propertyMapInput">propertyMapInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.propertyGroupId">propertyGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.propertyMap">propertyMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `propertyGroupIdInput`<sup>Optional</sup> <a name="propertyGroupIdInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.propertyGroupIdInput"></a>

```java
public java.lang.String getPropertyGroupIdInput();
```

- *Type:* java.lang.String

---

##### `propertyMapInput`<sup>Optional</sup> <a name="propertyMapInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.propertyMapInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertyMapInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `propertyGroupId`<sup>Required</sup> <a name="propertyGroupId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.propertyGroupId"></a>

```java
public java.lang.String getPropertyGroupId();
```

- *Type:* java.lang.String

---

##### `propertyMap`<sup>Required</sup> <a name="propertyMap" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.propertyMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertyMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroupsOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesPropertyGroups</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.resetCheckpointingEnabled">resetCheckpointingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.resetCheckpointInterval">resetCheckpointInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.resetConfigurationType">resetConfigurationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.resetMinPauseBetweenCheckpoints">resetMinPauseBetweenCheckpoints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCheckpointingEnabled` <a name="resetCheckpointingEnabled" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.resetCheckpointingEnabled"></a>

```java
public void resetCheckpointingEnabled()
```

##### `resetCheckpointInterval` <a name="resetCheckpointInterval" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.resetCheckpointInterval"></a>

```java
public void resetCheckpointInterval()
```

##### `resetConfigurationType` <a name="resetConfigurationType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.resetConfigurationType"></a>

```java
public void resetConfigurationType()
```

##### `resetMinPauseBetweenCheckpoints` <a name="resetMinPauseBetweenCheckpoints" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.resetMinPauseBetweenCheckpoints"></a>

```java
public void resetMinPauseBetweenCheckpoints()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.checkpointingEnabledInput">checkpointingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.checkpointIntervalInput">checkpointIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.configurationTypeInput">configurationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.minPauseBetweenCheckpointsInput">minPauseBetweenCheckpointsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.checkpointingEnabled">checkpointingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.checkpointInterval">checkpointInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.configurationType">configurationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.minPauseBetweenCheckpoints">minPauseBetweenCheckpoints</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `checkpointingEnabledInput`<sup>Optional</sup> <a name="checkpointingEnabledInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.checkpointingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getCheckpointingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `checkpointIntervalInput`<sup>Optional</sup> <a name="checkpointIntervalInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.checkpointIntervalInput"></a>

```java
public java.lang.Number getCheckpointIntervalInput();
```

- *Type:* java.lang.Number

---

##### `configurationTypeInput`<sup>Optional</sup> <a name="configurationTypeInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.configurationTypeInput"></a>

```java
public java.lang.String getConfigurationTypeInput();
```

- *Type:* java.lang.String

---

##### `minPauseBetweenCheckpointsInput`<sup>Optional</sup> <a name="minPauseBetweenCheckpointsInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.minPauseBetweenCheckpointsInput"></a>

```java
public java.lang.Number getMinPauseBetweenCheckpointsInput();
```

- *Type:* java.lang.Number

---

##### `checkpointingEnabled`<sup>Required</sup> <a name="checkpointingEnabled" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.checkpointingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getCheckpointingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `checkpointInterval`<sup>Required</sup> <a name="checkpointInterval" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.checkpointInterval"></a>

```java
public java.lang.Number getCheckpointInterval();
```

- *Type:* java.lang.Number

---

##### `configurationType`<sup>Required</sup> <a name="configurationType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.configurationType"></a>

```java
public java.lang.String getConfigurationType();
```

- *Type:* java.lang.String

---

##### `minPauseBetweenCheckpoints`<sup>Required</sup> <a name="minPauseBetweenCheckpoints" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.minPauseBetweenCheckpoints"></a>

```java
public java.lang.Number getMinPauseBetweenCheckpoints();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.resetConfigurationType">resetConfigurationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.resetMetricsLevel">resetMetricsLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigurationType` <a name="resetConfigurationType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.resetConfigurationType"></a>

```java
public void resetConfigurationType()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.resetLogLevel"></a>

```java
public void resetLogLevel()
```

##### `resetMetricsLevel` <a name="resetMetricsLevel" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.resetMetricsLevel"></a>

```java
public void resetMetricsLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.configurationTypeInput">configurationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.metricsLevelInput">metricsLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.configurationType">configurationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.metricsLevel">metricsLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `configurationTypeInput`<sup>Optional</sup> <a name="configurationTypeInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.configurationTypeInput"></a>

```java
public java.lang.String getConfigurationTypeInput();
```

- *Type:* java.lang.String

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `metricsLevelInput`<sup>Optional</sup> <a name="metricsLevelInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.metricsLevelInput"></a>

```java
public java.lang.String getMetricsLevelInput();
```

- *Type:* java.lang.String

---

##### `configurationType`<sup>Required</sup> <a name="configurationType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.configurationType"></a>

```java
public java.lang.String getConfigurationType();
```

- *Type:* java.lang.String

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `metricsLevel`<sup>Required</sup> <a name="metricsLevel" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.metricsLevel"></a>

```java
public java.lang.String getMetricsLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.putCheckpointConfiguration">putCheckpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.putMonitoringConfiguration">putMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.putParallelismConfiguration">putParallelismConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.resetCheckpointConfiguration">resetCheckpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.resetMonitoringConfiguration">resetMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.resetParallelismConfiguration">resetParallelismConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCheckpointConfiguration` <a name="putCheckpointConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.putCheckpointConfiguration"></a>

```java
public void putCheckpointConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.putCheckpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration</a>

---

##### `putMonitoringConfiguration` <a name="putMonitoringConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.putMonitoringConfiguration"></a>

```java
public void putMonitoringConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.putMonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration</a>

---

##### `putParallelismConfiguration` <a name="putParallelismConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.putParallelismConfiguration"></a>

```java
public void putParallelismConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.putParallelismConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration</a>

---

##### `resetCheckpointConfiguration` <a name="resetCheckpointConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.resetCheckpointConfiguration"></a>

```java
public void resetCheckpointConfiguration()
```

##### `resetMonitoringConfiguration` <a name="resetMonitoringConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.resetMonitoringConfiguration"></a>

```java
public void resetMonitoringConfiguration()
```

##### `resetParallelismConfiguration` <a name="resetParallelismConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.resetParallelismConfiguration"></a>

```java
public void resetParallelismConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.checkpointConfiguration">checkpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.monitoringConfiguration">monitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.parallelismConfiguration">parallelismConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.checkpointConfigurationInput">checkpointConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.monitoringConfigurationInput">monitoringConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.parallelismConfigurationInput">parallelismConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `checkpointConfiguration`<sup>Required</sup> <a name="checkpointConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.checkpointConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference getCheckpointConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfigurationOutputReference</a>

---

##### `monitoringConfiguration`<sup>Required</sup> <a name="monitoringConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.monitoringConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference getMonitoringConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfigurationOutputReference</a>

---

##### `parallelismConfiguration`<sup>Required</sup> <a name="parallelismConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.parallelismConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference getParallelismConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference</a>

---

##### `checkpointConfigurationInput`<sup>Optional</sup> <a name="checkpointConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.checkpointConfigurationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration getCheckpointConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationCheckpointConfiguration</a>

---

##### `monitoringConfigurationInput`<sup>Optional</sup> <a name="monitoringConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.monitoringConfigurationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration getMonitoringConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationMonitoringConfiguration</a>

---

##### `parallelismConfigurationInput`<sup>Optional</sup> <a name="parallelismConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.parallelismConfigurationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration getParallelismConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.resetAutoScalingEnabled">resetAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.resetConfigurationType">resetConfigurationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.resetParallelism">resetParallelism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.resetParallelismPerKpu">resetParallelismPerKpu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutoScalingEnabled` <a name="resetAutoScalingEnabled" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.resetAutoScalingEnabled"></a>

```java
public void resetAutoScalingEnabled()
```

##### `resetConfigurationType` <a name="resetConfigurationType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.resetConfigurationType"></a>

```java
public void resetConfigurationType()
```

##### `resetParallelism` <a name="resetParallelism" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.resetParallelism"></a>

```java
public void resetParallelism()
```

##### `resetParallelismPerKpu` <a name="resetParallelismPerKpu" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.resetParallelismPerKpu"></a>

```java
public void resetParallelismPerKpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.autoScalingEnabledInput">autoScalingEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.configurationTypeInput">configurationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.parallelismInput">parallelismInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.parallelismPerKpuInput">parallelismPerKpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.autoScalingEnabled">autoScalingEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.configurationType">configurationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.parallelism">parallelism</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.parallelismPerKpu">parallelismPerKpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoScalingEnabledInput`<sup>Optional</sup> <a name="autoScalingEnabledInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.autoScalingEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoScalingEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `configurationTypeInput`<sup>Optional</sup> <a name="configurationTypeInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.configurationTypeInput"></a>

```java
public java.lang.String getConfigurationTypeInput();
```

- *Type:* java.lang.String

---

##### `parallelismInput`<sup>Optional</sup> <a name="parallelismInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.parallelismInput"></a>

```java
public java.lang.Number getParallelismInput();
```

- *Type:* java.lang.Number

---

##### `parallelismPerKpuInput`<sup>Optional</sup> <a name="parallelismPerKpuInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.parallelismPerKpuInput"></a>

```java
public java.lang.Number getParallelismPerKpuInput();
```

- *Type:* java.lang.Number

---

##### `autoScalingEnabled`<sup>Required</sup> <a name="autoScalingEnabled" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.autoScalingEnabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoScalingEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `configurationType`<sup>Required</sup> <a name="configurationType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.configurationType"></a>

```java
public java.lang.String getConfigurationType();
```

- *Type:* java.lang.String

---

##### `parallelism`<sup>Required</sup> <a name="parallelism" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.parallelism"></a>

```java
public java.lang.Number getParallelism();
```

- *Type:* java.lang.Number

---

##### `parallelismPerKpu`<sup>Required</sup> <a name="parallelismPerKpu" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.parallelismPerKpu"></a>

```java
public java.lang.Number getParallelismPerKpu();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationParallelismConfiguration</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putApplicationCodeConfiguration">putApplicationCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putApplicationEncryptionConfiguration">putApplicationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putApplicationSnapshotConfiguration">putApplicationSnapshotConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putApplicationSystemRollbackConfiguration">putApplicationSystemRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putEnvironmentProperties">putEnvironmentProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putFlinkApplicationConfiguration">putFlinkApplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putVpcConfigurations">putVpcConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putZeppelinApplicationConfiguration">putZeppelinApplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resetApplicationCodeConfiguration">resetApplicationCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resetApplicationEncryptionConfiguration">resetApplicationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resetApplicationSnapshotConfiguration">resetApplicationSnapshotConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resetApplicationSystemRollbackConfiguration">resetApplicationSystemRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resetEnvironmentProperties">resetEnvironmentProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resetFlinkApplicationConfiguration">resetFlinkApplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resetVpcConfigurations">resetVpcConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resetZeppelinApplicationConfiguration">resetZeppelinApplicationConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplicationCodeConfiguration` <a name="putApplicationCodeConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putApplicationCodeConfiguration"></a>

```java
public void putApplicationCodeConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putApplicationCodeConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration</a>

---

##### `putApplicationEncryptionConfiguration` <a name="putApplicationEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putApplicationEncryptionConfiguration"></a>

```java
public void putApplicationEncryptionConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putApplicationEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration</a>

---

##### `putApplicationSnapshotConfiguration` <a name="putApplicationSnapshotConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putApplicationSnapshotConfiguration"></a>

```java
public void putApplicationSnapshotConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putApplicationSnapshotConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration</a>

---

##### `putApplicationSystemRollbackConfiguration` <a name="putApplicationSystemRollbackConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putApplicationSystemRollbackConfiguration"></a>

```java
public void putApplicationSystemRollbackConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putApplicationSystemRollbackConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration</a>

---

##### `putEnvironmentProperties` <a name="putEnvironmentProperties" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putEnvironmentProperties"></a>

```java
public void putEnvironmentProperties(Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putEnvironmentProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties</a>

---

##### `putFlinkApplicationConfiguration` <a name="putFlinkApplicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putFlinkApplicationConfiguration"></a>

```java
public void putFlinkApplicationConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putFlinkApplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration</a>

---

##### `putVpcConfigurations` <a name="putVpcConfigurations" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putVpcConfigurations"></a>

```java
public void putVpcConfigurations(IResolvable|java.util.List<Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putVpcConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations">Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations</a>>

---

##### `putZeppelinApplicationConfiguration` <a name="putZeppelinApplicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putZeppelinApplicationConfiguration"></a>

```java
public void putZeppelinApplicationConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.putZeppelinApplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration</a>

---

##### `resetApplicationCodeConfiguration` <a name="resetApplicationCodeConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resetApplicationCodeConfiguration"></a>

```java
public void resetApplicationCodeConfiguration()
```

##### `resetApplicationEncryptionConfiguration` <a name="resetApplicationEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resetApplicationEncryptionConfiguration"></a>

```java
public void resetApplicationEncryptionConfiguration()
```

##### `resetApplicationSnapshotConfiguration` <a name="resetApplicationSnapshotConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resetApplicationSnapshotConfiguration"></a>

```java
public void resetApplicationSnapshotConfiguration()
```

##### `resetApplicationSystemRollbackConfiguration` <a name="resetApplicationSystemRollbackConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resetApplicationSystemRollbackConfiguration"></a>

```java
public void resetApplicationSystemRollbackConfiguration()
```

##### `resetEnvironmentProperties` <a name="resetEnvironmentProperties" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resetEnvironmentProperties"></a>

```java
public void resetEnvironmentProperties()
```

##### `resetFlinkApplicationConfiguration` <a name="resetFlinkApplicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resetFlinkApplicationConfiguration"></a>

```java
public void resetFlinkApplicationConfiguration()
```

##### `resetVpcConfigurations` <a name="resetVpcConfigurations" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resetVpcConfigurations"></a>

```java
public void resetVpcConfigurations()
```

##### `resetZeppelinApplicationConfiguration` <a name="resetZeppelinApplicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.resetZeppelinApplicationConfiguration"></a>

```java
public void resetZeppelinApplicationConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationCodeConfiguration">applicationCodeConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationEncryptionConfiguration">applicationEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationSnapshotConfiguration">applicationSnapshotConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationSystemRollbackConfiguration">applicationSystemRollbackConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.environmentProperties">environmentProperties</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.flinkApplicationConfiguration">flinkApplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.vpcConfigurations">vpcConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList">Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.zeppelinApplicationConfiguration">zeppelinApplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationCodeConfigurationInput">applicationCodeConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationEncryptionConfigurationInput">applicationEncryptionConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationSnapshotConfigurationInput">applicationSnapshotConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationSystemRollbackConfigurationInput">applicationSystemRollbackConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.environmentPropertiesInput">environmentPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.flinkApplicationConfigurationInput">flinkApplicationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.vpcConfigurationsInput">vpcConfigurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations">Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.zeppelinApplicationConfigurationInput">zeppelinApplicationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationCodeConfiguration`<sup>Required</sup> <a name="applicationCodeConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationCodeConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference getApplicationCodeConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfigurationOutputReference</a>

---

##### `applicationEncryptionConfiguration`<sup>Required</sup> <a name="applicationEncryptionConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationEncryptionConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference getApplicationEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfigurationOutputReference</a>

---

##### `applicationSnapshotConfiguration`<sup>Required</sup> <a name="applicationSnapshotConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationSnapshotConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference getApplicationSnapshotConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfigurationOutputReference</a>

---

##### `applicationSystemRollbackConfiguration`<sup>Required</sup> <a name="applicationSystemRollbackConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationSystemRollbackConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference getApplicationSystemRollbackConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfigurationOutputReference</a>

---

##### `environmentProperties`<sup>Required</sup> <a name="environmentProperties" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.environmentProperties"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference getEnvironmentProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentPropertiesOutputReference</a>

---

##### `flinkApplicationConfiguration`<sup>Required</sup> <a name="flinkApplicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.flinkApplicationConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference getFlinkApplicationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfigurationOutputReference</a>

---

##### `vpcConfigurations`<sup>Required</sup> <a name="vpcConfigurations" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.vpcConfigurations"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList getVpcConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList">Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList</a>

---

##### `zeppelinApplicationConfiguration`<sup>Required</sup> <a name="zeppelinApplicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.zeppelinApplicationConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference getZeppelinApplicationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference</a>

---

##### `applicationCodeConfigurationInput`<sup>Optional</sup> <a name="applicationCodeConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationCodeConfigurationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration getApplicationCodeConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationCodeConfiguration</a>

---

##### `applicationEncryptionConfigurationInput`<sup>Optional</sup> <a name="applicationEncryptionConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationEncryptionConfigurationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration getApplicationEncryptionConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationEncryptionConfiguration</a>

---

##### `applicationSnapshotConfigurationInput`<sup>Optional</sup> <a name="applicationSnapshotConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationSnapshotConfigurationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration getApplicationSnapshotConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSnapshotConfiguration</a>

---

##### `applicationSystemRollbackConfigurationInput`<sup>Optional</sup> <a name="applicationSystemRollbackConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.applicationSystemRollbackConfigurationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration getApplicationSystemRollbackConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationApplicationSystemRollbackConfiguration</a>

---

##### `environmentPropertiesInput`<sup>Optional</sup> <a name="environmentPropertiesInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.environmentPropertiesInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties getEnvironmentPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties">Kinesisanalyticsv2ApplicationApplicationConfigurationEnvironmentProperties</a>

---

##### `flinkApplicationConfigurationInput`<sup>Optional</sup> <a name="flinkApplicationConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.flinkApplicationConfigurationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration getFlinkApplicationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationFlinkApplicationConfiguration</a>

---

##### `vpcConfigurationsInput`<sup>Optional</sup> <a name="vpcConfigurationsInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.vpcConfigurationsInput"></a>

```java
public IResolvable|java.util.List<Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations> getVpcConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations">Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations</a>>

---

##### `zeppelinApplicationConfigurationInput`<sup>Optional</sup> <a name="zeppelinApplicationConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.zeppelinApplicationConfigurationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration getZeppelinApplicationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfiguration</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList;

new Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.get"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations">Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations">Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations</a>>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.resetSecurityGroupIds"></a>

```java
public void resetSecurityGroupIds()
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.resetSubnetIds"></a>

```java
public void resetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations">Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations">Kinesisanalyticsv2ApplicationApplicationConfigurationVpcConfigurations</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.resetDatabaseArn">resetDatabaseArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabaseArn` <a name="resetDatabaseArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.resetDatabaseArn"></a>

```java
public void resetDatabaseArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.databaseArnInput">databaseArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.databaseArn">databaseArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `databaseArnInput`<sup>Optional</sup> <a name="databaseArnInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.databaseArnInput"></a>

```java
public java.lang.String getDatabaseArnInput();
```

- *Type:* java.lang.String

---

##### `databaseArn`<sup>Required</sup> <a name="databaseArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.databaseArn"></a>

```java
public java.lang.String getDatabaseArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.putGlueDataCatalogConfiguration">putGlueDataCatalogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.resetGlueDataCatalogConfiguration">resetGlueDataCatalogConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGlueDataCatalogConfiguration` <a name="putGlueDataCatalogConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.putGlueDataCatalogConfiguration"></a>

```java
public void putGlueDataCatalogConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.putGlueDataCatalogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration</a>

---

##### `resetGlueDataCatalogConfiguration` <a name="resetGlueDataCatalogConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.resetGlueDataCatalogConfiguration"></a>

```java
public void resetGlueDataCatalogConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.glueDataCatalogConfiguration">glueDataCatalogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.glueDataCatalogConfigurationInput">glueDataCatalogConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `glueDataCatalogConfiguration`<sup>Required</sup> <a name="glueDataCatalogConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.glueDataCatalogConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference getGlueDataCatalogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfigurationOutputReference</a>

---

##### `glueDataCatalogConfigurationInput`<sup>Optional</sup> <a name="glueDataCatalogConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.glueDataCatalogConfigurationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration getGlueDataCatalogConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationGlueDataCatalogConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList;

new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.get"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration</a>>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.resetArtifactId">resetArtifactId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArtifactId` <a name="resetArtifactId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.resetArtifactId"></a>

```java
public void resetArtifactId()
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.resetGroupId"></a>

```java
public void resetGroupId()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.artifactIdInput">artifactIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.artifactId">artifactId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `artifactIdInput`<sup>Optional</sup> <a name="artifactIdInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.artifactIdInput"></a>

```java
public java.lang.String getArtifactIdInput();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.artifactId"></a>

```java
public java.lang.String getArtifactId();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.putMavenReference">putMavenReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.putS3ContentLocation">putS3ContentLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.resetArtifactType">resetArtifactType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.resetMavenReference">resetMavenReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.resetS3ContentLocation">resetS3ContentLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMavenReference` <a name="putMavenReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.putMavenReference"></a>

```java
public void putMavenReference(Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.putMavenReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference</a>

---

##### `putS3ContentLocation` <a name="putS3ContentLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.putS3ContentLocation"></a>

```java
public void putS3ContentLocation(Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.putS3ContentLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation</a>

---

##### `resetArtifactType` <a name="resetArtifactType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.resetArtifactType"></a>

```java
public void resetArtifactType()
```

##### `resetMavenReference` <a name="resetMavenReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.resetMavenReference"></a>

```java
public void resetMavenReference()
```

##### `resetS3ContentLocation` <a name="resetS3ContentLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.resetS3ContentLocation"></a>

```java
public void resetS3ContentLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.mavenReference">mavenReference</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.s3ContentLocation">s3ContentLocation</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.artifactTypeInput">artifactTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.mavenReferenceInput">mavenReferenceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.s3ContentLocationInput">s3ContentLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.artifactType">artifactType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mavenReference`<sup>Required</sup> <a name="mavenReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.mavenReference"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference getMavenReference();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReferenceOutputReference</a>

---

##### `s3ContentLocation`<sup>Required</sup> <a name="s3ContentLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.s3ContentLocation"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference getS3ContentLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference</a>

---

##### `artifactTypeInput`<sup>Optional</sup> <a name="artifactTypeInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.artifactTypeInput"></a>

```java
public java.lang.String getArtifactTypeInput();
```

- *Type:* java.lang.String

---

##### `mavenReferenceInput`<sup>Optional</sup> <a name="mavenReferenceInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.mavenReferenceInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference getMavenReferenceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationMavenReference</a>

---

##### `s3ContentLocationInput`<sup>Optional</sup> <a name="s3ContentLocationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.s3ContentLocationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation getS3ContentLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation</a>

---

##### `artifactType`<sup>Required</sup> <a name="artifactType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.artifactType"></a>

```java
public java.lang.String getArtifactType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.resetFileKey">resetFileKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.resetObjectVersion">resetObjectVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketArn` <a name="resetBucketArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.resetBucketArn"></a>

```java
public void resetBucketArn()
```

##### `resetFileKey` <a name="resetFileKey" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.resetFileKey"></a>

```java
public void resetFileKey()
```

##### `resetObjectVersion` <a name="resetObjectVersion" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.resetObjectVersion"></a>

```java
public void resetObjectVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.fileKeyInput">fileKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.objectVersionInput">objectVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.fileKey">fileKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.objectVersion">objectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.bucketArnInput"></a>

```java
public java.lang.String getBucketArnInput();
```

- *Type:* java.lang.String

---

##### `fileKeyInput`<sup>Optional</sup> <a name="fileKeyInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.fileKeyInput"></a>

```java
public java.lang.String getFileKeyInput();
```

- *Type:* java.lang.String

---

##### `objectVersionInput`<sup>Optional</sup> <a name="objectVersionInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.objectVersionInput"></a>

```java
public java.lang.String getObjectVersionInput();
```

- *Type:* java.lang.String

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

---

##### `fileKey`<sup>Required</sup> <a name="fileKey" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.fileKey"></a>

```java
public java.lang.String getFileKey();
```

- *Type:* java.lang.String

---

##### `objectVersion`<sup>Required</sup> <a name="objectVersion" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.objectVersion"></a>

```java
public java.lang.String getObjectVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationS3ContentLocation</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.putS3ContentLocation">putS3ContentLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.resetS3ContentLocation">resetS3ContentLocation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3ContentLocation` <a name="putS3ContentLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.putS3ContentLocation"></a>

```java
public void putS3ContentLocation(Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.putS3ContentLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation</a>

---

##### `resetS3ContentLocation` <a name="resetS3ContentLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.resetS3ContentLocation"></a>

```java
public void resetS3ContentLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.s3ContentLocation">s3ContentLocation</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.s3ContentLocationInput">s3ContentLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3ContentLocation`<sup>Required</sup> <a name="s3ContentLocation" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.s3ContentLocation"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference getS3ContentLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference</a>

---

##### `s3ContentLocationInput`<sup>Optional</sup> <a name="s3ContentLocationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.s3ContentLocationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation getS3ContentLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.resetBasePath">resetBasePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.resetBucketArn">resetBucketArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBasePath` <a name="resetBasePath" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.resetBasePath"></a>

```java
public void resetBasePath()
```

##### `resetBucketArn` <a name="resetBucketArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.resetBucketArn"></a>

```java
public void resetBucketArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.basePathInput">basePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.basePath">basePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basePathInput`<sup>Optional</sup> <a name="basePathInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.basePathInput"></a>

```java
public java.lang.String getBasePathInput();
```

- *Type:* java.lang.String

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.bucketArnInput"></a>

```java
public java.lang.String getBucketArnInput();
```

- *Type:* java.lang.String

---

##### `basePath`<sup>Required</sup> <a name="basePath" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.basePath"></a>

```java
public java.lang.String getBasePath();
```

- *Type:* java.lang.String

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationS3ContentLocation</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.resetLogLevel">resetLogLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.resetLogLevel"></a>

```java
public void resetLogLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration</a>

---


### Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.putCatalogConfiguration">putCatalogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.putCustomArtifactsConfiguration">putCustomArtifactsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.putDeployAsApplicationConfiguration">putDeployAsApplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.putMonitoringConfiguration">putMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.resetCatalogConfiguration">resetCatalogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.resetCustomArtifactsConfiguration">resetCustomArtifactsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.resetDeployAsApplicationConfiguration">resetDeployAsApplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.resetMonitoringConfiguration">resetMonitoringConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCatalogConfiguration` <a name="putCatalogConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.putCatalogConfiguration"></a>

```java
public void putCatalogConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.putCatalogConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration</a>

---

##### `putCustomArtifactsConfiguration` <a name="putCustomArtifactsConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.putCustomArtifactsConfiguration"></a>

```java
public void putCustomArtifactsConfiguration(IResolvable|java.util.List<Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.putCustomArtifactsConfiguration.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration</a>>

---

##### `putDeployAsApplicationConfiguration` <a name="putDeployAsApplicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.putDeployAsApplicationConfiguration"></a>

```java
public void putDeployAsApplicationConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.putDeployAsApplicationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration</a>

---

##### `putMonitoringConfiguration` <a name="putMonitoringConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.putMonitoringConfiguration"></a>

```java
public void putMonitoringConfiguration(Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.putMonitoringConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration</a>

---

##### `resetCatalogConfiguration` <a name="resetCatalogConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.resetCatalogConfiguration"></a>

```java
public void resetCatalogConfiguration()
```

##### `resetCustomArtifactsConfiguration` <a name="resetCustomArtifactsConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.resetCustomArtifactsConfiguration"></a>

```java
public void resetCustomArtifactsConfiguration()
```

##### `resetDeployAsApplicationConfiguration` <a name="resetDeployAsApplicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.resetDeployAsApplicationConfiguration"></a>

```java
public void resetDeployAsApplicationConfiguration()
```

##### `resetMonitoringConfiguration` <a name="resetMonitoringConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.resetMonitoringConfiguration"></a>

```java
public void resetMonitoringConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.catalogConfiguration">catalogConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.customArtifactsConfiguration">customArtifactsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.deployAsApplicationConfiguration">deployAsApplicationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.monitoringConfiguration">monitoringConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.catalogConfigurationInput">catalogConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.customArtifactsConfigurationInput">customArtifactsConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.deployAsApplicationConfigurationInput">deployAsApplicationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.monitoringConfigurationInput">monitoringConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `catalogConfiguration`<sup>Required</sup> <a name="catalogConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.catalogConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference getCatalogConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfigurationOutputReference</a>

---

##### `customArtifactsConfiguration`<sup>Required</sup> <a name="customArtifactsConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.customArtifactsConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList getCustomArtifactsConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfigurationList</a>

---

##### `deployAsApplicationConfiguration`<sup>Required</sup> <a name="deployAsApplicationConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.deployAsApplicationConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference getDeployAsApplicationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfigurationOutputReference</a>

---

##### `monitoringConfiguration`<sup>Required</sup> <a name="monitoringConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.monitoringConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference getMonitoringConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfigurationOutputReference</a>

---

##### `catalogConfigurationInput`<sup>Optional</sup> <a name="catalogConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.catalogConfigurationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration getCatalogConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCatalogConfiguration</a>

---

##### `customArtifactsConfigurationInput`<sup>Optional</sup> <a name="customArtifactsConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.customArtifactsConfigurationInput"></a>

```java
public IResolvable|java.util.List<Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration> getCustomArtifactsConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationCustomArtifactsConfiguration</a>>

---

##### `deployAsApplicationConfigurationInput`<sup>Optional</sup> <a name="deployAsApplicationConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.deployAsApplicationConfigurationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration getDeployAsApplicationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationDeployAsApplicationConfiguration</a>

---

##### `monitoringConfigurationInput`<sup>Optional</sup> <a name="monitoringConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.monitoringConfigurationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration getMonitoringConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationMonitoringConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration">Kinesisanalyticsv2ApplicationApplicationConfigurationZeppelinApplicationConfiguration</a>

---


### Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.resetApplicationMaintenanceWindowStartTime">resetApplicationMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationMaintenanceWindowStartTime` <a name="resetApplicationMaintenanceWindowStartTime" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.resetApplicationMaintenanceWindowStartTime"></a>

```java
public void resetApplicationMaintenanceWindowStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.applicationMaintenanceWindowStartTimeInput">applicationMaintenanceWindowStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.applicationMaintenanceWindowStartTime">applicationMaintenanceWindowStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration">Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationMaintenanceWindowStartTimeInput`<sup>Optional</sup> <a name="applicationMaintenanceWindowStartTimeInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.applicationMaintenanceWindowStartTimeInput"></a>

```java
public java.lang.String getApplicationMaintenanceWindowStartTimeInput();
```

- *Type:* java.lang.String

---

##### `applicationMaintenanceWindowStartTime`<sup>Required</sup> <a name="applicationMaintenanceWindowStartTime" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.applicationMaintenanceWindowStartTime"></a>

```java
public java.lang.String getApplicationMaintenanceWindowStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration">Kinesisanalyticsv2ApplicationApplicationMaintenanceConfiguration</a>

---


### Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.resetApplicationRestoreType">resetApplicationRestoreType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.resetSnapshotArn">resetSnapshotArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.resetSnapshotName">resetSnapshotName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationRestoreType` <a name="resetApplicationRestoreType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.resetApplicationRestoreType"></a>

```java
public void resetApplicationRestoreType()
```

##### `resetSnapshotArn` <a name="resetSnapshotArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.resetSnapshotArn"></a>

```java
public void resetSnapshotArn()
```

##### `resetSnapshotName` <a name="resetSnapshotName" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.resetSnapshotName"></a>

```java
public void resetSnapshotName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.applicationRestoreTypeInput">applicationRestoreTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.snapshotArnInput">snapshotArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.snapshotNameInput">snapshotNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.applicationRestoreType">applicationRestoreType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.snapshotArn">snapshotArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.snapshotName">snapshotName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration">Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationRestoreTypeInput`<sup>Optional</sup> <a name="applicationRestoreTypeInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.applicationRestoreTypeInput"></a>

```java
public java.lang.String getApplicationRestoreTypeInput();
```

- *Type:* java.lang.String

---

##### `snapshotArnInput`<sup>Optional</sup> <a name="snapshotArnInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.snapshotArnInput"></a>

```java
public java.lang.String getSnapshotArnInput();
```

- *Type:* java.lang.String

---

##### `snapshotNameInput`<sup>Optional</sup> <a name="snapshotNameInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.snapshotNameInput"></a>

```java
public java.lang.String getSnapshotNameInput();
```

- *Type:* java.lang.String

---

##### `applicationRestoreType`<sup>Required</sup> <a name="applicationRestoreType" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.applicationRestoreType"></a>

```java
public java.lang.String getApplicationRestoreType();
```

- *Type:* java.lang.String

---

##### `snapshotArn`<sup>Required</sup> <a name="snapshotArn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.snapshotArn"></a>

```java
public java.lang.String getSnapshotArn();
```

- *Type:* java.lang.String

---

##### `snapshotName`<sup>Required</sup> <a name="snapshotName" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.snapshotName"></a>

```java
public java.lang.String getSnapshotName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration">Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration</a>

---


### Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.resetAllowNonRestoredState">resetAllowNonRestoredState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowNonRestoredState` <a name="resetAllowNonRestoredState" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.resetAllowNonRestoredState"></a>

```java
public void resetAllowNonRestoredState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.allowNonRestoredStateInput">allowNonRestoredStateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.allowNonRestoredState">allowNonRestoredState</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration">Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowNonRestoredStateInput`<sup>Optional</sup> <a name="allowNonRestoredStateInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.allowNonRestoredStateInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowNonRestoredStateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `allowNonRestoredState`<sup>Required</sup> <a name="allowNonRestoredState" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.allowNonRestoredState"></a>

```java
public java.lang.Boolean|IResolvable getAllowNonRestoredState();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration">Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration</a>

---


### Kinesisanalyticsv2ApplicationRunConfigurationOutputReference <a name="Kinesisanalyticsv2ApplicationRunConfigurationOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference;

new Kinesisanalyticsv2ApplicationRunConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.putApplicationRestoreConfiguration">putApplicationRestoreConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.putFlinkRunConfiguration">putFlinkRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.resetApplicationRestoreConfiguration">resetApplicationRestoreConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.resetFlinkRunConfiguration">resetFlinkRunConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplicationRestoreConfiguration` <a name="putApplicationRestoreConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.putApplicationRestoreConfiguration"></a>

```java
public void putApplicationRestoreConfiguration(Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.putApplicationRestoreConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration">Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration</a>

---

##### `putFlinkRunConfiguration` <a name="putFlinkRunConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.putFlinkRunConfiguration"></a>

```java
public void putFlinkRunConfiguration(Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.putFlinkRunConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration">Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration</a>

---

##### `resetApplicationRestoreConfiguration` <a name="resetApplicationRestoreConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.resetApplicationRestoreConfiguration"></a>

```java
public void resetApplicationRestoreConfiguration()
```

##### `resetFlinkRunConfiguration` <a name="resetFlinkRunConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.resetFlinkRunConfiguration"></a>

```java
public void resetFlinkRunConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.applicationRestoreConfiguration">applicationRestoreConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference">Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.flinkRunConfiguration">flinkRunConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference">Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.applicationRestoreConfigurationInput">applicationRestoreConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration">Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.flinkRunConfigurationInput">flinkRunConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration">Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfiguration">Kinesisanalyticsv2ApplicationRunConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationRestoreConfiguration`<sup>Required</sup> <a name="applicationRestoreConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.applicationRestoreConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference getApplicationRestoreConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference">Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfigurationOutputReference</a>

---

##### `flinkRunConfiguration`<sup>Required</sup> <a name="flinkRunConfiguration" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.flinkRunConfiguration"></a>

```java
public Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference getFlinkRunConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference">Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfigurationOutputReference</a>

---

##### `applicationRestoreConfigurationInput`<sup>Optional</sup> <a name="applicationRestoreConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.applicationRestoreConfigurationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration getApplicationRestoreConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration">Kinesisanalyticsv2ApplicationRunConfigurationApplicationRestoreConfiguration</a>

---

##### `flinkRunConfigurationInput`<sup>Optional</sup> <a name="flinkRunConfigurationInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.flinkRunConfigurationInput"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration getFlinkRunConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration">Kinesisanalyticsv2ApplicationRunConfigurationFlinkRunConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationRunConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationRunConfiguration">Kinesisanalyticsv2ApplicationRunConfiguration</a>

---


### Kinesisanalyticsv2ApplicationTagsList <a name="Kinesisanalyticsv2ApplicationTagsList" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationTagsList;

new Kinesisanalyticsv2ApplicationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.get"></a>

```java
public Kinesisanalyticsv2ApplicationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTags">Kinesisanalyticsv2ApplicationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<Kinesisanalyticsv2ApplicationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTags">Kinesisanalyticsv2ApplicationTags</a>>

---


### Kinesisanalyticsv2ApplicationTagsOutputReference <a name="Kinesisanalyticsv2ApplicationTagsOutputReference" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.kinesisanalyticsv2_application.Kinesisanalyticsv2ApplicationTagsOutputReference;

new Kinesisanalyticsv2ApplicationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTags">Kinesisanalyticsv2ApplicationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|Kinesisanalyticsv2ApplicationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.kinesisanalyticsv2Application.Kinesisanalyticsv2ApplicationTags">Kinesisanalyticsv2ApplicationTags</a>

---



